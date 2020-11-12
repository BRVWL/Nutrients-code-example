import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Job } from "../../Job/entity/Job";

@Entity()
export class Skill extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: '100' })
    title : string;

    @Column({ type: 'varchar', length: '500' })
    description : string;

    @Column({ nullable: true })
    jobId: number;

    @ManyToOne(type => Job, job => job.skills)
    job: Job;

    @Column({type: 'timestamp'})
    created_at: number;
    
    @Column({type: 'timestamp'})
    updated_at: number;

}
