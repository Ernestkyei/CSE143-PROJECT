const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')


routes.get('/', lesson1Controller.sarahRoute);
routes.get('/emily', lesson1Controller.emilyRoute);
routes.get('/hanna', lesson1Controller.hannaRoute);

module.exports = routes;
