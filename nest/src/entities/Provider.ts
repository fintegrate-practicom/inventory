import { IsEmail, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Provider {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: false })
    @Length(2, 15, { message: "must be between 2 and 15 letters" })
    providerName: string;

    @Column({ nullable: false })
    @IsEmail({}, { message: "please provide a valid email address" })
    providerEmail: string;

    @Column({ nullable: false })
    @Length(7, 10, { message: "phone number is between 7 and 10 digits" })
    providerPhone: string;

    @Column({ nullable: true })
    webSiteUrl: string;

    @Column({ nullable: false })
    supplyCategory: string;

    @Column({ nullable: false })
    businessId: string;

    @Column({ nullable: false })
    isActive: boolean = true;

}