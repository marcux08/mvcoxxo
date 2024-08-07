// models/oferta.model.js
import { Schema, model } from 'mongoose';

const promocionSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    descuento: {
        type: Number,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    }
});

export const Oferta = model('Oferta', promocionSchema);
