const { log } = require('console');
var http = require('http');

//Cria o servidor na porta 3000
try{

    http.createServer(function(req, res){
        //mando uma mensagem para aparecer no servidor
        res.end("Ola Mundo");
    }).listen(3000);

    //Mensagem para informar que a conexão foi feita
    console.log("Queimando uma rosquinha . . .");

}catch(err){
    console.log(`Erro ao conectar ao Servidor:${err}`);
}



