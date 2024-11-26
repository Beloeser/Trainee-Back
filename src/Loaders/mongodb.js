const mongoose = require("mongoose") ;
const dotenv = require("dotenv") ;
async function startDB() {
    console.log("aqui") 
    await mongoose.connect(
        process.env.MONGO_URI) ;

        console.log("Banco de dados inicializado") ;
    
}
module.exports = startDB;