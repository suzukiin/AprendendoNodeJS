const express = require("express");
const app = express();

//Crio uma rota, mas como resposta ela manda um arquivo HTML
//o comando "__dirname" é como se eu tivesse pegando a raiz do diretório
//no caso __dirname == C:\Users\lucas\OneDrive\Área de Trabalho\AprendendoNodeJs\Inserindo_HTML(Rotas)
//apos isso é adicionado o caminho para o arquivo HTML
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.listen(3000, function(){
    console.log("Tomando um café . . .");
})

