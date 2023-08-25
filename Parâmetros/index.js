const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Aula Sobre Parametros");
})

//Crio uma rota chama "/ola" mas ela exige um parâmetro chamado cargo,
//então para acessar essa rota é necessário a seguinte url localhost:3000/ola/PARAMETRO
//no qual o PARAMETRO pode ser um nome, um número vai depender da situação
//entretanto mesmo assim não será possivel acessar a rota pois ela pede DOIS parâmetros
//então ficara da seguinte forma "localhost:3000/ola/PARAMETRO_1/PARAMETRO_2"
app.get("/ola/:cargo/:nome/", function(req, res){

    //o req.params nada mais é do que a requisição do usuario para o servidor
    //atraves dos parâmetros passados na url acima
    //res.send(req.params);


    //Pego um dos dados do parâmetro e passo como uma mensagem para a página
    //O comando "res.send" só pode ser usado uma vez dentro de uma função de uma rota
    res.send("<h1>Ola "+req.params.nome+"</h1><br><h2>Meu cargo: "+req.params.cargo+"</h2>");
    
})


app.listen(3000, function(){
    console.log("Queimando uma rosquinha . . .");
})