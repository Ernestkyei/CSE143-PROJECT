const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')


routes.get('/', lesson1Controller.sarahRoute1);
routes.get('/emily', lesson1Controller.emilyRoute1);
routes.get('/hanna', lesson1Controller.hannaRoute1);

module.exports = routes;
