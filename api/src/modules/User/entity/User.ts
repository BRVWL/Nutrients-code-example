import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Profile } from "../../Profile/entity/Profile";
import { Photo } from "../../Photo/entity/Photo";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: '100' })
    firstName: string;

    @Column({ type: 'varchar', length: '230' })
    lastName: string;
    
    @Column()
    age: number;
    
    @Column({ type: 'text', unique: true })
    email: string;

    @Column({ nullable: true })
    profileId: number;
    
    @OneToOne(type => Profile)
    @JoinColumn()
    profile: Profile;

    @OneToMany(type => Photo, photo => photo.user)
    photos: Photo[];

}
