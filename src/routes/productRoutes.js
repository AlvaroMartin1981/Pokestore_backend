const express = require('express');
const routerProduct= express.Router();
const productController = require('../controllers/productController');
const authentication = require('../middlewares/authentication');



routerProduct.get('/', productController.getAll);
routerProduct.get('/:id', productController.getById);
routerProduct.get('/nombre/:nombre', productController.getProductsByName);


// Rutas protegidas solo para administradores
routerProduct.put('/:id/editar', authentication, productController.edit);
routerProduct.post('/crear', authentication, productController.create);
routerProduct.delete('/:id', authentication, productController.delete);

// Rutas accesibles para todos los usuarios autenticados
routerProduct.get('/', authentication, productController.getAll);
routerProduct.get('/:id', authentication, productController.getById);
routerProduct.get('/nombre/:nombre', authentication, productController.getProductsByName);
routerProduct.put('/:id', authentication, productController.update);
routerProduct.post('/:id/comentario', authentication, productController.insertComment);
routerProduct.post('/:id/like', authentication, productController.like);

module.exports = routerProduct;
