const { Router } = require('express');
const controllers = require('./controllers');

const routes = Router();

routes.post('/client', controllers.ClientController.store);
routes.get('/zip_code/:zip_code', controllers.ZipCodeController.zip_code);

module.exports = routes;
