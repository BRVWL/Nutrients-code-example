import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "../../User/entity/User";

@Entity()
export class Employer extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    userId: number;
    
    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    // TODO: Create Job and Review entities
    // @OneToMany(type => Job, job => job.employer)
    // jobs: Job[];

    // @OneToMany(type => Review, review => review.employer)
    // reviews: Review[];

    @Column()
    rating: number;

}
