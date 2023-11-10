const UserModel = require("../modells/models");
const {CreateUser, FindOneUsername} = require("../repositorio/UsarRepositori");
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
async function login(req, res){
    const params = req.body;

    const user = await FindOneUsername(params.usuario);
    if(user){
        //Logueo
        bcrypt.compare(params.password, user.result.password, function (err, check) {
            if(check){
                res.status(200).send({message:"el usuario se encuentra logueado"});
            }else{
                res.status(400).send({message:"Usuario o contraseña Invalida 1"});
            }
        });    
    }else{
        res.status(400).send({message:"Usuario o contraseña Invalida"});
    }
}
async function deleteUserData(req, res){
    const usuario = req.params["usuario"];
    const response = await deleteUser(usuario);
    res.status(response.status).send(response);
}
module.exports = {
    create,
    login,
    deleteUserData
}