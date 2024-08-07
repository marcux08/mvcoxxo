// controllers/oferta.controller.js
import { Oferta } from './models/ofertas.model.js';

export const testofertas = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear una oferta de prueba
Oferta.create({
    nombre: '2x1 en Snacks',
    descripcion: 'Compra 1 snack y lleva otro gratis',
    descuento: 50,
    fechaInicio: new Date('2024-08-01'),
    fechaFin: new Date('2024-08-15')
});
