// models/persona.model.js
import { Schema, model } from 'mongoose';

const personaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apepat: {
        type: String,
        required: true
    },
    apemat: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    fechaContratacion: {
        type: Date,
        default: Date.now
    }
});

export const Empleado = model('Empleado', personaSchema);
export const Gerente = model('Gerente', personaSchema);
