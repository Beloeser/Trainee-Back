const { Router} = require("express") ;
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController")
const rotas = Router();

//Sessoes
rotas.post('/sessao' , SessoesController.create) ;
rotas.get('/sessao', SessoesController.read) ;
rotas.delete('/sessao/:id', SessoesController.delete)

//Usuarios
rotas.post('/usuarios' , UsuarioController.create) ;
rotas.get('/usuarios', UsuarioController.read) ;
rotas.delete('/usuarios/:id', UsuarioController.delete); 
rotas.put('/usuarios:id',UsuarioController.update )






module.exports = rotas ;