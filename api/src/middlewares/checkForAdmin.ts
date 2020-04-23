import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/User";

export const checkForAdmin = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = res.locals.jwtPayload.userId;

    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send({message: "Benutzer konnte nicht gefunden werden!", logout: true});
    }

    if (user && user.isAdmin) {
      next();
    } else {
      res.status(401).send({message: "Diese Aktion dürfen nur Administratoren durchführen!"});
    }
  };
};
