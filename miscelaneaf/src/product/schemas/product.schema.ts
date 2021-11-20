import { Schema } from 'mongoose';


export const ProductSchema = new Schema( {
    id: Number,
    name: String,
    price: Number,
    photoUrl: String,
       // deafult: 'https://i.picasion.com/pic91/6bc665558b754fb808cbe3dc57e22976.gif'})


});