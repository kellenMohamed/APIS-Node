/* Requisito:
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu Id
 2 Obter o endereco do usuario pelo Id 
*/
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obtertUsuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'João',
            dataNascimento: new Date()
        })
    },1000)
}

function obterTelefone(IdUsuario,callback){
    setTimeout(() => {
        return callback(null,{
            telefone: '01698523699',
            ddd: 16
        })
    },2000);
}

function obterEndereco(IdUsuario){
    setTimeout(() => {
        return callback(null,{
            rua: 'dos loucos',
            numero:0
        })
    })

}

function resolverUsuario(erro,usuario){
    console.log('Usuario: ',usuario);
}

obtertUsuario(function resolverUsuario(error,usuario){
    if(error){
        console.error('Erro de usuário: ',erro)
        return;
    }
    obterTelefone(usuario.id,function resolverTelefone(error1,telefone){
        if(error1){
            console.error('Erro de telefone: ',error)
            return;
        }
        obterEndereco(usuario.id,function resolverEndereco(error2,endereco){
            if(error2){
                console.error('Erro de endereço: ',error)
                return
            }
            console.log (`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua},${endereco.numero},
                Telefone: ${telefone.ddd},${telefone.numero}
            `)
        })
    })
}
)


//const telefone = obterTelefone(usuario.id);
//const endereco = obterEndereco(usuario.id);


//console.log('Telefone:: ',telefone);