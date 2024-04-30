const express = require('express');
const routerProduct= express.Router();
const productController = require('../controllers/productController');
const { authentication, isAdmin } = require('../middlewares/authentication'); // Importa el middleware de autenticación

// Rutas protegidas solo para administradores
routerProduct.put('/:id/editar', authentication, isAdmin, productController.edit);
routerProduct.post('/crear', authentication, isAdmin, productController.create);
routerProduct.delete('/:id', authentication, isAdmin, productController.delete);

// Rutas accesibles para todos los usuarios autenticados
routerProduct.get('/', authentication, productController.getAll);
routerProduct.get('/:id', authentication, productController.getById);
routerProduct.get('/nombre/:nombre', authentication, productController.getProductsByName);
routerProduct.put('/:id', authentication, productController.update);
routerProduct.post('/:id/comentario', authentication, productController.insertComment);
routerProduct.post('/:id/like', authentication, productController.like);

module.exports = routerProduct;
