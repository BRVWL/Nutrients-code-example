import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Skill } from "../../Skill/entity/Skill";
import { Category } from "../../Category/entity/Category";

@Entity()
export class Job extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: '100' })
    title : string;

    @Column({ type: 'varchar', length: '500' })
    description : string;

    @OneToMany(type => Category, category => category.job)
    categories: Category[];

    // jobStatus [enum]
    @OneToMany(type => Skill, skill => skill.job)
    skills: Skill[];

    // experience level [enum]

    @Column({ type: 'varchar', length: '100' })
    pay_rate : string;

    @Column({ type: 'varchar', length: '100' })
    language : string;

    // job type [enum]
    // questions[Question]
    // visibility [enum]
    // project_length
    @Column()
    hours_per_week: number;

    // budget
    @Column({ nullable: false })
    emmploerId: number;
    
    // appliers: [Emmployee]
    // hired: [Emmployee]
    // invited: [Emmployee] 
    @Column({type: 'timestamp'})
    created_at: number;
    
    @Column({type: 'timestamp'})
    updated_at: number;

}
