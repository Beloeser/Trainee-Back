const SessoesModel = require("../Models/SessoesModel");
const UsuarioModel = require("../Models/UsuarioModel");

class SessoesController {

   // Criar sessão
   async create(req, res) {
      try {
         const usuarioEncontrado = await UsuarioModel.findById(req.body.id_usuario);
         if (!usuarioEncontrado) return res.status(404).json({ message: "O usuário não foi encontrado" });

         const sessoes = await SessoesModel.create(req.body);
         return res.status(200).json(sessoes);
      } catch (error) {
         return res.status(500).json({ message: "Deu ruim aqui", error: error.message });
      }
   }

   // Ler sessões
   async read(req, res) {
      try {
         const sessoes = await SessoesModel.find().populate('id_usuario', '-senha');
         return res.status(200).json(sessoes);
      } catch (error) {
         return res.status(500).json({ message: "Deu ruim aqui", error: error.message });
      }
   }

   // Atualizar sessão
   async update(req, res) {
      try {
         const { id } = req.params;
         const sessaoAtualizada = await SessoesModel.findByIdAndUpdate(id, req.body, { new: true });

         if (!sessaoAtualizada) return res.status(404).json({ message: "Sessão não encontrada" });

         return res.status(200).json(sessaoAtualizada);
      } catch (error) {
         return res.status(500).json({ message: "Deu ruim aqui", error: error.message });
      }
   }

   // Deletar sessão
   async delete(req, res) {
      try {
         const { id_usuario } = req.params;
         const sessaoEncontrada = await SessoesModel.findOne({ id_usuario: id_usuario });

         if (!sessaoEncontrada) return res.status(404).json({ message: "Sessão não encontrada" });

         await sessaoEncontrada.deleteOne();
         return res.status(200).json({ mensagem: "Sessão deletada com sucesso" });
      } catch (error) {
         return res.status(500).json({ message: "Deu ruim aqui", error: error.message });
      }
   }
}

module.exports = new SessoesController();
