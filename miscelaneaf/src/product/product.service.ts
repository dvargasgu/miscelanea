import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    private productList: string[] = ["Esfero", "Portaminas", "Lapiz", "Marcador", "Resaltador", "Micropunta"];

    getproductList():string[]{
        return this.productList;
    
    }

}
