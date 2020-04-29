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
    public date: Date;

    @Column()
    public distance: number;

    @Column({default: "bike"})
    public type: string;

    @Column({default: false})
    public hidden: boolean;

    @Column()
    @CreateDateColumn()
    public createdAt: string;

    @ManyToOne(() => User, (user) => user.ways, {onDelete: "CASCADE"})
    public user: User;
  }
