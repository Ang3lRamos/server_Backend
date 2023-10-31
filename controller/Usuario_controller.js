const UserModel = require("../modells/models");
const {CreateUser} = require("../repositorio/UsarRepositori");
const bcrypt = require("bcrypt-nodejs");

async function create(req, res){
    const params = req.body;

    const user = new UserModel();

    //Encriptar
    bcrypt.hash(params.password, null, null, async function (err, hash){
        if(hash){
            user.email = params.email;
            user.usuario = params.usuario;
            user.password = hash;

            const response = await CreateUser(user);
            res.status(response.status).send(response);
        }
    });
}
module.exports = {
    create,
}