import { Controller, Delete, Get, Param, Put, Post, Body, Headers, HttpException, BadRequestException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { Types } from 'mongoose';

@Controller('api/inventory/product')
export class ProductController {
    constructor(private readonly productsService: ProductService) { }

    @Get(':productId')
    getProductById(@Param('productId') productId: string) {
        return this.productsService.getProductById(productId);
    }

    @Get()
    getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @Put('sale/')
    updateProductDiscount(@Headers('x-access-token') token: string, @Body() newSalePercentage: number) {
        return this.productsService.updateProductDiscount(newSalePercentage, token);
    }

    @Put(':productId')
    async updateProduct(
        @Param('productId') productId: string,
        @Body() updatedFields: any,
    ): Promise<Product> {
        const objectId = this.convertToObjectId(productId);
        return this.productsService.updateProduct(objectId, updatedFields);
    }

    @Post()
    async addNewProduct(@Headers('x-access-token') token: string, @Body() newProduct: Product) {
        try {
            await this.productsService.addNewProduct(newProduct, token);
            return { message: 'Product added successfully' };
        }
        catch (err) {
            console.log(err);
        }
    }

    @Delete(':productId')
    async softDeleteProduct(@Param('productId') productId: string) {
        await this.productsService.softDeleteProduct(productId);
        return { message: 'Product soft deleted successfully' };
    }


    private convertToObjectId(id: string): Types.ObjectId {
        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid ObjectId format');
        }
        return new Types.ObjectId(id);
    }
}
