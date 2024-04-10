import { Min } from "class-validator";
import { Column, Double, Entity } from "typeorm";
import { Component } from './Component';

@Entity()

export class Product {
    @Column({nullable:false})
    productName:string

    @Column({nullable:false})
    productDescription:string

    @Column({ nullable: false })
    productComponents: Component[];
    @Column({nullable:false})
        componentsImages:string[]

    @Column({ nullable: false })
    @Min(1,{message:"price must be positive"})
    totalPrice: Double;

    @Column({ nullable: false })
    adminIn: number

}