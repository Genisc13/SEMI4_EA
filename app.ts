import "dotenv/config";
import  express  from "express";
import cors from "cors";
import db from "./config/mongo";
import { Libro } from "./interfaces/libro.interface";
import LibroModel from "./models/libreria";
import LibreriaModel from "./models/libreria";


const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

db().then(() => console.log("Conexion Ready"));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));

const libro1=new LibroModel({
    name:'Las maldibas',
    pages:23,
    author:'Jose Luis',
    year:2001,
    desription:'Muy bueno',
    price:45,
})

const libro2=new LibroModel({
    name:'Las Buenas',
    pages:230,
    author:'Jose Luis',
    year:2005,
    desription:'Decente',
    price:33,
})

const libro3=new LibroModel({
    name:'Pertenencia',
    pages:350,
    author:'Jose Carlos',
    year:1999,
    desription:'Excelente',
    price:26,
})

const libreria1=new LibreriaModel({
    books:34,
    specialization:'Libros fantasticos',
    open_year:1950,
    location:'Barcelona',
})

const libreria2=new LibreriaModel({
    books:104,
    specialization:'Novelas celebridades',
    open_year:1988,
    location:'Tarragona',
})

const libreria3=new LibreriaModel({
    books:10080,
    specialization:'Un poco de todo',
    open_year:1930,
    location:'El Vendrell',
})

const insertLibro1=async()=>{
    try{
        const resultado=await libro1.save();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}
const insertLibro2=async()=>{
    try{
        const resultado=await libro2.save();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}
const insertLibro3=async()=>{
    try{
        const resultado=await libro3.save();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}
const insertLibreria1=async()=>{
    try{
        const resultado=await libreria1.save();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}
const insertLibreria2=async()=>{
    try{
        const resultado=await libreria2.save();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}
const insertLibreria3=async()=>{
    try{
        const resultado=await libreria3.save();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}
insertLibro1();
insertLibro2();
insertLibro3();
insertLibreria1();
insertLibreria2();
insertLibreria3();
