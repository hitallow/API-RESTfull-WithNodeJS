const express = require('express');
const consign = require('consign');


// crio uma instancia do express gerando um servidor
const app = express();

// incluo a pasta routes na minha app
consign().include('routers').into(app);

// app está ouvindo 
app.listen(3000, '127.0.0.1', () => {
    console.log("servidor rodando");
});