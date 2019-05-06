
const NeDB = require('nedb');

let db = new NeDB({
    filename : "users.db",
    autoload: true

});

// exporto todo meu documento para poder ser utilizado por outros arquivos JS
module.exports = app =>{
    // rota do tipo get
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

    // exemplo de rota post
    app.post('/users', (request, response)=>{
        /*
             faz o insert do objeto JSON passado como primeiro parametro, o segundo parametro 
            é uma função CALLBACK, que recebe o erro (caso haja) e o 
            objeto inserido no banco de dados (caso tenha sido inserido)
         */
        db.insert(request.body , (error , user)=>{
            if(error){
                console.log(`Error : ${error}`);
                response.status(400).json({
                    error 
                });
            }else{
                response.status(200).json(user);
            }

        });
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