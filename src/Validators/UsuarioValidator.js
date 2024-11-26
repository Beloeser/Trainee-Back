const {z} = require("zod") ;
const{ validateRequest } = require("zod-express-middleware") ;
const mongoose = require("mongoose")


const create = validateRequest({
    body: z.object({
        nome: z.string({required_error: "o nome é obrigatório"}),
        email:z.string({required_error: "o email é obrigatório"}).email("digite um email válido") ,
        senha: z.string({required_error: "a senha é obrigatório"}),
        cargo: z.string({required_error: "o cargo é obrigatório"}) ,
        status: z.string({required_error: "o status é obrigatório"})

    })
})
const destroy = validateRequest({
    params: z.object({
        id : z.custom(mongoose.isValidObjectId) ,
    }) ,
})

const update = validateRequest({
   body : z.object({
    nome: z.string().optional(),
        email:z.string().email("digite um email válido").optional() ,
        senha: z.string().optional(),
        cargo: z.string().optional() ,
        status: z.string().optional()
   }) ,
   params: z.object({
    id : z.custom(mongoose.isValidObjectId)
   })
})
module.exports ={
    create ,
    destroy ,
    update ,
}