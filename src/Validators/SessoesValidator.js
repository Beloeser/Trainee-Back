const {z} = require("zod") ;
const{ validateRequest } = require("zod-express-middleware") ;
const mongoose = require("mongoose")

const create = validateRequest({
    body: z.object({
        id_usuario :z.custom(mongoose.isValidObjectId , "O id nao é valido") ,
    }),

});

const destroy = validateRequest({
    params : z.object({
        id_usuario :z.custom(mongoose.isValidObjectId , "O id  usuarionao é valido"),
    }),
})

module.exports ={
    create,
    destroy
}