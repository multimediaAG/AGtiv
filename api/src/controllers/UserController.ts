import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { log } from "../utils/utils";
class UserController {
  public static listAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const users = await userRepository.query(`
      SELECT user.username, user.grade, Sum(way.distance) AS distance
      FROM user
      LEFT JOIN way
      ON user.id = way.userId
      GROUP BY user.id
      ORDER BY distance DESC
    `);
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
    const grades: string[] = ["Lehrerin / Lehrer", "Studienseminar 18 / 20", "Studienseminar 19 / 21", "Studienseminar 20 / 22", "5a", "5b", "5c", "5d", "5e", "5f", "6a", "6b", "6c", "6d", "6e", "6f", "7a", "7b", "7c", "7d", "7e", "7f", "8a", "8b", "8c", "8d", "8e", "8f", "9a", "9b", "9c", "9d", "9e", "9f", "10a", "10b", "10c", "10d", "10e", "10f", "Q11", "Q12"];
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
}

export default UserController;
