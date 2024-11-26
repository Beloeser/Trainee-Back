const dotenv = require("dotenv") ;
const app = require("./App") ;
const loaders = require("./Loaders/index") ;

dotenv.config() ;
loaders.start() ;

const PORT = process.env.PORT || 8000 ;
app.listen(PORT, () => console.log("Servidor Rodando")) ;