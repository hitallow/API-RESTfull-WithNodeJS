const express = require('express');
const consign = require('consign');
const bodyParser = require("body-parser");


// crio uma instancia do express gerando um servidor
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// incluo a pasta routes na minha app
consign().include('routers').into(app);

// app está ouvindo 
app.listen(3000, '127.0.0.1', () => {
    console.log("servidor rodando");
});