const mongoose = require("mongoose") ;

async function startDB() {
    await mongoose.connect('mongodb+srv://bernardoloeseramaral:sMlsDmILMX0T6Y8f@cursonode.axc52.mongodb.net/?retryWrites=true&w=majority&appName=CursoNode')
    
}
module.exports = startDB;