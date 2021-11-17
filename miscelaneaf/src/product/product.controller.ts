import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService:ProductService) {}

    @Get()
    getProduct():string[] {
        return this.productService.getproductList();
    }

    @Post('/create')
    createProdcut(@Res() res){
        return res.status(HttpStatus.CREATED).json({message:'received'});

    }
}