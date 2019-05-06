const http = require('http');

let server = http.createServer((request, response) => {

    console.log("URL:", request.url);
    console.log("METHOD:", request.method);
    switch (request.url) {
        case '/':
            response.statusCode = 200;
            response.setHeader('Content-type', 'text/html');
            response.end("<h1>Você está acessando a pasta raiz</h1>");
            break;
        case '/users':
            response.statusCode = 200;
            response.setHeader('Content-type',"application/json");
            response.end(JSON.stringify({
                users:[{
                    name:'Hitallo',
                    email :'email@dominio.com',
                    id : 1
                }]
            }));
    }
    response.end("OK");
});
server.listen(3000, '127.0.0.1', () => {
    console.log("servidor rodando");
});