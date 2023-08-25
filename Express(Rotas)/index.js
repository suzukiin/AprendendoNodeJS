//chama o módulo para a variavel express
const express = require("express");

//Instancia o express na variável app
const app = express();

//Cria rota principal 
app.get("/" , function(req, res){
    //manda uma mensagem para o servidor
    res.send("Meu Site!!")
})

//Crio uma rota chamada "sobre"
app.get("/sobre", function(req , res){
    //Manda uma mensagem para a página "sobre"
    res.send("Minha página sobre");
})

//Cria uma rota chamada "blog"
app.get("/blog", function(req, res){
    //Manda uma mensagem para a página "blog"
    res.send("Meu Blog");
})


//Faz o servidor rodar na porta 3000 (Essa função sempre deve estar na última linha do arquivo, caso contrário ela não funciona)
app.listen(3000 , function(){

    //mensagem assim que o servidor estiver funcionando 
    console.log("Servidor rodando na url: http://localhost:3000");
});