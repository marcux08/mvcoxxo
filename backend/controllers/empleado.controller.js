// controllers/empleado.controller.js
import { Empleado } from './models/emple.geren.model.js';

export const testempleado = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un empleado de prueba
Empleado.create({
    nombre: 'Ana',
    apepat: 'Hernandez',
    apemat: 'Lopez',
    puesto: 'Cajera',
    salario: 5000,
    fechaContratacion: new Date('2023-05-10')
});
