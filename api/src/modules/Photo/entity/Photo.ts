import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../User/entity/User";

@Entity()
export class Photo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
    
    @Column({ nullable: true })
    userId: number;

    @ManyToOne(type => User, user => user.photos)
    user: User;

}