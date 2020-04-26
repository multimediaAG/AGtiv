import * as bcrypt from "bcryptjs";
import {
Column,
CreateDateColumn,
Entity,
JoinTable,
ManyToMany,
ManyToOne,
OneToMany,
PrimaryGeneratedColumn,
Unique,
UpdateDateColumn,
} from "typeorm";
import { Way } from "./Way";

@Entity()
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public username: string;

  @Column()
  public realName: string;

  @Column()
  public grade: string;

  @Column()
  public isAdmin: boolean;

  @Column({select: false})
  public password: string;

  @OneToMany(() => Way, (way) => way.user)
  public ways: Way[];

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  public hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  public checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
      if (unencryptedPassword) {
          return bcrypt.compareSync(unencryptedPassword, this.password);
      } else {
          return false;
      }
  }
}
