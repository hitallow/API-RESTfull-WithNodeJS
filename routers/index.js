const express = require("express");
const routes = express.Router();


module.exports = routes.get("/", (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.end("<h1>Você está acessando a pasta raiz</h1>");

});