

// exporto todo meu documento para poder ser utilizado por outros arquivos JS
module.exports = app =>{
    // rota do tipo get
    app.get('/users/', (request, response)=>{
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
    app.post('/users/', (request, response)=>{
       
        response.json(request.body);
    }); 
    
    // rota do tipo get
    app.get('/users/admin',(request , response)=>{
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


};