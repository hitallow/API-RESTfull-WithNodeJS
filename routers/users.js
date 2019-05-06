const express = require("express");
const routes = express.Router();


routes.get('/users', (request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-type', "application/json");
    response.json({
        users: [{
            name: 'Hitallo',
            email: 'email@dominio.com',
            id: 1
        }]
    });
}); 


routes.get('/users/admin',(request , response)=>{
    response.statusCode = 200;
    response.setHeader('Content-type','application/json');
    response.json({
        admin:[{
            name:"Admin",
            email:'email@admin.com',
            id: 2

        }]
    })
});


module.exports = routes;