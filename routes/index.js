const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')


routes.get('/', lesson1Controller.ericRoute);
routes.get('/emilyy', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannaRoute);

module.exports = routes;
