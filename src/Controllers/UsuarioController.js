const UsuarioModel = require("../Models/UsuarioModel") ;

class UsuarioController{

   async create(req,res) {
    try{
        const usuario = await UsuarioModel.create(req.body);

        const{ senha, ...novoUsuario} =usuario.toObject()

        res.status(200).json(novoUsuario) ;
    } catch(error) {
        res 
            .status(500)
            .json({ message :" deu ruim aqui" ,error : error.message}) ;
            
    }
   }

   async update(req,res) {
   try { const {id} = req.params ;
    
   const usuariosEncontrado= await UsuarioModel.findById(id) ;

    
    if(!usuariosEncontrado) return res.status(404).json({message: "usuario nao encontrado"});
    
 const usuario = await usuariosEncontrado.set(req.body).save() ;

    //const usuario = await UsuarioModel.findByIdAndUpdate(id , req.body , {new: true});
    return res.status(200).json(usuario);} catch(error) {
        res
            .status(500)
            .json({message :"Deu ruim aqui" ,error: error.message});
        }

    }

    async read(req,res) {
        const usuario = await UsuarioModel.find();
        return res.status(200).json(usuario);

    }

    async delete(req,res){
         
            try { const {id} = req.params ;
            const usuariosEncontrado= await UsuarioModel.findById(id) ;
        
            if(!usuariosEncontrado){

             return res.status(404).json({message: "usuario nao encontrado"});}
             await usuariosEncontrado.deleteOne();
        return res.status(200).json({"mensagem" : "usuario deletado com sucesso"}) ;

    }catch(error) {
        res
            .status(500)
            .json({message :"Deu ruim aqui" ,error: error.message});
        }

}








}
module.exports = new UsuarioController();
//673120d636f498563c99073d

/*async delete(req,res){
    const { id } = req.params

    await UsuarioModel.findByIdAndDelete(id);

    return res.status(200).json({"mensagem" : "usuario deletado com sucesso"}) ;

}*/ 

/* async create(req,res) {
    const usuario = await UsuarioModel.create(req.body) ;

    return res.status(200).json(usuario);
    }
    async read(req,res) {
        const usuario = await UsuarioModel.find();
        return res.status(200).json(usuario);

    }*/ 