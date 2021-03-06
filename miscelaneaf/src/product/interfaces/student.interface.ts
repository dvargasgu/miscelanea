import { Document } from "mongoose";

export interface IProduct extends Document{

    readonly id : number;
    readonly name : string;
    readonly price : number;
    readonly photoURL : string;
}