import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { log } from "../utils/utils";
import { Way } from "../entity/Way";
import { grades } from "../data/grades";
class UserController {
  public static listAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const users = await userRepository.query(`
      SELECT user.username, user.grade, Sum(way.distance) AS distance
      FROM user
      LEFT JOIN way
      ON user.id = way.userId AND way.hidden = false AND way.roundIdx = ?
      GROUP BY user.id
      ORDER BY distance DESC
    `, [req.params.roundIdx]);
    res.send(users);
  }

  public static listAllAdmin = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    let users = await userRepository.find({ relations: ["ways"] });
    for (const user of users as any[]) {
      user.distance = user.ways.reduce((a, b) => a + b.distance, 0);
      user.ways = user.ways.sort((a, b) => b.date - a.date);
    }
    users = (users as any[]).sort((a, b) => b.distance - a.distance);
    res.send(users);
  }

  public static usernameAvailable = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const result = await userRepository.findOne({ username: req.params.username });
    res.send({usernameAvailable: result ? false : true});
  }

  public static newUser = async (req: Request, res: Response) => {
    const { username, password, passwordVerify, realName, grade } = req.body;
    if (!(username && realName && password && passwordVerify && grade)) {
      res.status(400).send({message: "Nicht alle Felder ausgefüllt!"});
      return;
    }
    if (password != passwordVerify) {
      res.status(400).send({message: "Passwörter stimmen nicht überein!"});
      return;
    }
    if (!grades.includes(grade)) {
      res.status(400).send({message: "Die Klasse ist ungültig!"});
      return;
    }

    let user = new User();
    user.username = username;
    user.realName = realName;
    user.password = password;
    user.grade = grade;
    user.isAdmin = false;

    user.hashPassword();

    const userRepository = getRepository(User);
    try {
      user = await userRepository.save(user);
    } catch (e) {
      res.status(409).send({message: "Der Benutzername ist schon vorhanden!", errorField: "username"});
      return;
    }
    log("user created", { user });
    res.status(200).send({status: true});
  }

  public static deleteUser = async (req: Request, res: Response) => {

    const id = req.params.id;

    const userRepository = getRepository(User);
    try {
      await userRepository.delete(id);
    } catch (e) {
      res.status(500).send({message: "Konnte den Benutzer nicht löschen!"});
      return;
    }
    log("user deleted", { id });
    res.status(200).send({status: true});
  }

  public static changePassword = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { password } = req.body;
    if (!password) {
      res.status(400).send({message: "Nicht alle Felder ausgefüllt!"});
      return;
    }

    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOne(id);
      user.password = password;
      user.hashPassword();
      await userRepository.save(user);
    } catch (e) {
      res.status(500).send({message: "Konnte den das Passwort nicht ändern!"});
      return;
    }
    log("userpassword changed", { id });
    res.status(200).send({status: true});
  }

  public static changeAdminStatus = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { admin } = req.body;

    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOne(id);
      user.isAdmin = admin;
      await userRepository.save(user);
    } catch (e) {
      res.status(500).send({message: "Konnte den Adminstatus nicht ändern!"});
      return;
    }
    log("useradminstatus changed", { id, admin });
    res.status(200).send({status: true});
  }

  public static changeVisibility = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { hidden } = req.body;

    const wayRepository = getRepository(Way);
    try {
      const user = await wayRepository.findOne(id);
      user.hidden = hidden;
      await wayRepository.save(user);
    } catch (e) {
      res.status(500).send({message: "Konnte die Sichtbarkeit nicht ändern!"});
      return;
    }
    log("way visibility changed", { id, hidden });
    res.status(200).send({status: true});
  }
}

export default UserController;
