const { Router} = require("express") ;
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController") ;
const AuthController = require("./Controllers/AuthController") ;
const UsuarioValidator = require("./Validators/UsuarioValidator") ;
const SessoesValidator = require("./Validators/SessoesValidator") ;
const AuthValidator = require("./Validators/AuthValidator") ;
const verificarJwt =require("./Middlewares/verificarJwt")
const verificarUsuario = require("./Middlewares/verificarUsuario")


const rotas = Router();

//Sessoes
rotas.post('/sessao' ,verificarJwt , verificarUsuario ,SessoesValidator.create , SessoesController.create) ;
rotas.get('/sessao',verificarJwt , verificarUsuario , SessoesController.read) ;
rotas.delete('/sessao/:id_usuario', SessoesController.delete)

//Usuarios
rotas.post('/usuarios' , UsuarioValidator.create ,UsuarioController.create) ;
rotas.get('/usuarios', verificarJwt , UsuarioController.read) ;
rotas.delete('/usuarios/:id', verificarJwt, verificarUsuario ,UsuarioValidator.destroy , UsuarioController.delete); 
rotas.put('/usuarios/:id',UsuarioValidator.update, verificarUsuario ,UsuarioController.update )

//Auth
rotas.post("/login" , AuthValidator.login ,AuthController.login) ;




module.exports = rotas ;