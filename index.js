const http = require('http');

let server = http.createServer((request, response)=>{

    console.log("URL:", request.url);
    console.log("METHOD:",request.method);
    response.end("OK");
});
server.listen(   3000,'127.0.0.1',()=>{
    console.log("servidor rodando");
});