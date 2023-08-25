//faço o requerimento do módulo sequelize 
const Sequelize = require("sequelize");

//defino uma constante "sequelize" e nela passo um objeto Sequelize()
//dentro dela é necessário passar a string de conexão para o banco de dados desejado
//Sequelize("{Banco de dados}", "{usuario}", "{senha}") e o ultimo parâmetro
//o host, serve para indicar em qual máquina está sendo realizada a conexão
//neste caso a "Localhost"
const sequelize = new Sequelize("sequelize", "root", "8527", {
    host: "localhost",
    //dialect = qual o banco, neste caso o mysql
    dialect: "mysql"
});


//sequelize.authenticate() serve para fazermos a conexão com o banco de dados
//neste caso é usado duas funções para nos informar se foi possivel ou não a conexão
//o .then() é uma função de callback, ou seja, é executado quando a conexão é bem sucedida, caso contrário o catch()
//será executado nos mostrando o erro
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
})
