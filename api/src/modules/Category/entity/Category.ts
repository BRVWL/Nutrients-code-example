import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { Product } from "../../Product/entity/Product";
import { Job } from "../../Job/entity/Job";

@Entity()
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Product, product => product.category)
    @JoinColumn()
    products: Product[];


    @Column({ nullable: true })
    jobId: number;

    @ManyToOne(type => Job, job => job.categories)
    job: Job;

}