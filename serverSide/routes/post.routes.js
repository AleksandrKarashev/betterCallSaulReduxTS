const { Router } = require('express');
const router = Router();
const { checkIfUserExists, registerUser } = require("../queries/client.queries");

module.exports = function (pool) {

   router.post("/register", async (req, res) => {
      try {
         const { name } = await req.body;
         let user = await checkIfUserExists(name, pool);
         if (user.length !== 0) {
            return res.status(400).json({
               message: "Já existe um usuário com esse nome"
            })
         }
         await registerUser(name, pool)
         return res.status(200).json({
            message: "O pedido de ligação foi cadastrado com sucesso"
         })
      } catch (e) {
         res.status(500).json({ message: "Aconteceu um erro" })
      }
   })

   return router;

}