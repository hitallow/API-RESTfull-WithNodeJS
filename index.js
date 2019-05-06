const express = require('express');

const app = express();

app.get("/", (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.end("<h1>Você está acessando a pasta raiz</h1>");

});
app.get('/users', (request, response)=>{
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

app.listen(3000, '127.0.0.1', () => {
    console.log("servidor rodando");
});