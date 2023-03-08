import { Schema,Types,model,Model, version } from "mongoose";
import { Libro } from "../interfaces/libro.interface";

const LibroSchema=new Schema<Libro>({
    name:{
        type:String,
    },
    pages:{
        type:Number,
    },
    author:{
        type:String,
    },
    year:{
        type:Number,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },


},{
    timestamps:true,
    versionKey:false,
});

const LibroModel = model('libros',LibroSchema);
export default LibroModel;