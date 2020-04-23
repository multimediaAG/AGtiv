import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { User } from "../entity/User";

// tslint:disable-next-line: class-name
export class createAdminUser1574018391679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const user = new User();
        user.username = "admin";
        user.password = "admin";
        user.isAdmin = true;
        user.hashPassword();
        user.email = "admin@agtickets.github.io";
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }

    // tslint:disable-next-line: no-empty
    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
