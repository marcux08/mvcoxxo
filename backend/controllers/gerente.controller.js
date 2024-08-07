// controllers/gerente.controller.js
import { Gerente } from './models/emple.geren.model.js';

export const testgerente = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un gerente de prueba
Gerente.create({
    nombre: 'Juan',
    apepat: 'Perez',
    apemat: 'Martinez',
    puesto: 'Gerente de tienda',
    salario: 12000,
    fechaContratacion: new Date('2022-03-01')
});
