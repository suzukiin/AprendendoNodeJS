const Sequelize = require('sequelize');
const sequelize = new Sequelize("models", "root", "8527", {
    host: "localhost",
    dialect: "mysql"
})

//Cria uma constante chamada Postagem
//nesta constante iremos definir um models utilizando o "sequelize.define()"
//"sequelize.define("{nome}", {
//  {valores do models criado}    
//})"
const Postagem = sequelize.define('postagens', {
    //crio um dos valores de postagens como sendo chamado de "titulo"
    //dentro dele defino seu tipo usando o "Sequelize.{tipo}"
    titulo: {
        type: Sequelize.STRING,
    },

    conteudo: {
        type: Sequelize.TEXT,
    }
})

const Usuario = sequelize.define('usuario',{
    nome: {
        type: Sequelize.STRING,
    },

    sobrenome: {
        type: Sequelize.STRING,
    },

    idade: {
        type: Sequelize.INTEGER,
    },

    email: {
        type: Sequelize.STRING,
    }
})

//essa função sinroniza o nosso Model, neste caso o "Postagem", com o nosso
//banco de dados. E o comando "{force: true}" nos garante que a nossa tabela seja gerada
//no banco de dados
//Postagem.sync({force: true})

//Usuario.sync({force: true})


//INSERINDO DADOS NA TABELA ATRAVES DO SEQUELIZE
/*Postagem.create({
    titulo: "Volta dos que não foram",
    conteudo: "um livro incrívelmente ruim"
})*/

Usuario.create({
    nome: "Lucas",
    sobrenome: "Suzuki",
    idade: 19,
    email: "lucas14112003@gmail.com"
})


//quando executar o node mysql.js ele conectar com o bancod de dados selecionado
// em seguida nosso models será criado
// após ele irá verificar se não existe nenhuma tabela no banco de dados chamada
//, neste caso de postagens, e criara uma tabela com os dados que passamos no models postagens 

