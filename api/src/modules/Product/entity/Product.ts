import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "../../Category/entity/Category";

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: '100', unique: true })
    name: string;

    @Column()
    calories: number;

    @Column({type: "float"})
    fat: number;
    
    @Column({type: "float"})
    carbs: number;
    
    @Column({type: "float"})
    protein: number;

    @Column({ nullable: true })
    categoryId: number;

    @ManyToOne(type => Category, category => category.products)
    @JoinColumn()
    category: Category;
    
}

