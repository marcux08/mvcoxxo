// controllers/productoFaltante.controller.js
import { ProductoFaltante } from './models/productos.model.js';

// controllers/productoFaltante.controller.js


export const testproductof = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un producto faltante de prueba
ProductoFaltante.create({
    nombre: 'Cerveza Corona',
    descripcion: 'Cerveza clara 355ml',
    precio: 20,
    categoria: 'Bebidas',
    stock: 0,
    fechaAgregado: new Date()
});
