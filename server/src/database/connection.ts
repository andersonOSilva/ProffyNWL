import knex from 'knex'
// resolve os problemas para encontrar o caminho odnde o arquivo sql deve ser salvo 
import path from 'path'


// migrations controla as versoes do banco de dados

const db = knex({
    client:'sqlite3',
    connection:{
        filename: path.resolve(__dirname,'database.sqlite')
    },
    // para usar nulo quando nao conseguir definir o campo padrao para um valor
    useNullAsDefault: true,

});

export default db;