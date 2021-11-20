import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO} from './dto/create_product.dto';

@Controller('product')
export class ProductController {

    constructor(private readonly productService:ProductService) {}

    @Get()
    getProduct():string[] {
        return; 
    }

    @Post('/create')
    async createProduct(@Res() res, @Body() createproductDTO: CreateProductDTO ){

        const product = await this.productService.createProduct(createproductDTO);

        return res.status(HttpStatus.CREATED).json({
            message:'received',
            product: product
    });

    }
}