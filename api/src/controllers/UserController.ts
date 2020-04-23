import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
class UserController {
  public static listAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.send(users);
  }

  public static newUser = async (req: Request, res: Response) => {
    const { username, password, passwordVerify, realName } = req.body;
    if (!(username && realName && password && passwordVerify)) {
      res.status(400).send({message: "Nicht alle Felder ausgefüllt!"});
      return;
    }
    if (password != passwordVerify) {
      res.status(400).send({message: "Passwörter stimmen nicht überein!"});
      return;
    }

    const user = new User();
    user.username = username;
    user.realName = realName;
    user.password = password;
    user.isAdmin = false;

    user.hashPassword();

    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send({message: "Der Benutzername ist schon vorhanden!", errorField: "username"});
      return;
    }
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

    res.status(200).send({status: true});
  }
}

export default UserController;
