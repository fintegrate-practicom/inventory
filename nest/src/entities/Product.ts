import { Min, Length, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Product {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: false })
    @IsNotEmpty()
    productName: string;

    @Column({ nullable: false })
    @IsNotEmpty()
    productDescription: string;

    @Column({ nullable: false })
    @IsNotEmpty()
    componentsImages: string[];

    @Column({ nullable: false })
    @IsNotEmpty()
    @Min(0, { message: "package cost must be positive" })
    packageCost: number;

    @Column({ nullable: false })
    @IsNotEmpty()
    productComponents: any[];

    @Column({ nullable: false })
    @IsNotEmpty()
    @Min(1, { message: "price must be positive" })
    totalPrice: number;

    @Column({ nullable: false })
    @IsNotEmpty()
    adminId: string;

    @Column({ nullable: false })
    @IsNotEmpty()
    isActive: boolean = true;

    @Column({ nullable: true })
    @IsNotEmpty()
    isOnSale: boolean = false;

    @Column({ nullable: true })
    @IsNotEmpty()
    @Min(0, { message: "percentage cannot be negative" })
    salePercentage: number = 0;

    @Column({ nullable: false })
    @IsNotEmpty()
    @Min(0, { message: "stoke cannot be negative" })
    stockQuantity: number;

    @Column({ nullable: false })
    @IsNotEmpty()
    bussinesId: string;

    @Column({ nullable: false })
    @IsNotEmpty()
    @Length(3, 15, { message: "status must be between 3 and 15 letters" })
    componentStatus: string;

}