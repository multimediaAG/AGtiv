import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { User } from "./User";

@Entity()
  export class Way {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public time: Date;

    @Column()
    public length: number;

    @Column()
    @CreateDateColumn()
    public createdAt: string;

    @ManyToOne(() => User, (user) => user.ways)
    public user: User;
  }
