const express = require('express');

// gerenciador de rotas
const consign = require('consign');


const bodyParser = require("body-parser");


// crio uma instancia do express gerando um servidor
const app = express();

// visualização de json
app.use(bodyParser.json());
// usando bodyParser para enteder urlEnconded
app.use(bodyParser.urlencoded({extended:false}));
// incluo a pasta routes na minha app
consign().include('routers').into(app);

// app está ouvindo 
app.listen(3000, '127.0.0.1', () => {
    console.log("servidor rodando");
});