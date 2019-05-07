module.exports = {
    send: (error , request , reponse , code = 400)=>{
        console.log(`Error : ${error}`);
        response.status(code).json({
            error
        });

    }
}