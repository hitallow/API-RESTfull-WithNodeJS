const express = require('express');
const routesIndex = require('./routers/index');
const routersUsers = require('./routers/users');

const app = express();
app.use(routersUsers);
app.use('/users',routesIndex);


app.listen(3000, '127.0.0.1', () => {
    console.log("servidor rodando");
});