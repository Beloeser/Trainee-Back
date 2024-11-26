const {z} = require("zod") ;
const{ validateRequest } = require("zod-express-middleware") ;
const mongoose = require("mongoose")

const login =validateRequest({
    body: z.object({
        email:z.string({required_error: "o email é obrigatório"}).email("digite um email válido") ,
        senha: z.string({required_error: "a senha é obrigatório"}),
    })
}) ;

module.exports = {
    login,
} ;