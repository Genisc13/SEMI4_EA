import { Schema,Types,model,Model, version } from "mongoose";
import { Libreria } from "../interfaces/libreria.interface";

const LibreriaSchema=new Schema<Libreria>({
    books:{
        type:Number,
    },
    specialization:{
        type:String,
    },
    open_year:{
        type:Number,
    },
    location:{
        type:String,
    },
},{
    timestamps:true,
    versionKey:false,
});

const LibreriaModel = model('librerias',LibreriaSchema);
export default LibreriaModel;