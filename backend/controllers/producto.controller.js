// controllers/producto.controller.js
import { Producto } from './models/productos.model.js';

export const testproducto = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un producto de prueba
Producto.create({
    nombre: 'Coca-Cola',
    descripcion: 'Refresco de cola 600ml',
    precio: 15,
    categoria: 'Bebidas',
    stock: 200,
    fechaAgregado: new Date()
});
