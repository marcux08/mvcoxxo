import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { testempleado } from './backend/controllers/empleado.controller.js';
import { testgerente } from './backend/controllers/gerente.controller.js';
import { testofertas } from './backend/controllers/ofertas.controller.js';
import { testproducto } from './backend/controllers/producto.controller.js';
import { testproductof } from './backend/controllers/producf.controller.js';
import { testpromocion } from './backend/controllers/promocion.controller.js';
dotenv .config();
//importaciones de librerias las cuales nos va a servir para desarrollar el proyecto
mongoose.connect(process.env.urldb)




.then(()=>{
    console.log('sis')
})
.catch((err)=>{
    console.log('nel')
})


const app = express();
app.use(cors())
app.listen(4001,()=>{
    console.log("esta funcionando correctamente el servidor")
})
testempleado()
testgerente()
testofertas()
testproducto()
testproductof()
testpromocion()