import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { log } from "../utils/utils";
import { Way } from "../entity/Way";

class AuthController {

  public static login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).end(JSON.stringify({error: "Fehler"}));
    }

    // Get user from database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.createQueryBuilder("user")
        .addSelect("user.password")
        .where("user.username = :username", { username })
        .getOne();
    } catch (error) {
      res.status(401).end(JSON.stringify({message: "Falscher Benutzername!"}));
    }

    if (!user) {
      res.status(401).end(JSON.stringify({message: "Falscher Benutzername!"}));
      return;
    }
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).end(JSON.stringify({message: "Falsches Passwort"}));
      return;
    }
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      res.app.locals.config.JWT_SECRET,
      { expiresIn: "1h" },
    );

    const response: any = {
      ...user,
      token,
    };
    response.password = undefined;


    const hiddenWays = await getRepository(Way).count({ where: { user, hidden: true } });
    response.hasHiddenWays = hiddenWays > 0;

    // Send the jwt in the response
    log("login", { id: user.id });
    res.send(response);
  }

}
export default AuthController;
