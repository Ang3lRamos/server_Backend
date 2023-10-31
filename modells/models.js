const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UsuariosSchema = schema({
    email: String,   
    usuario: String,
    password: String
});

module.exports = mongoose.model('usuarios_collection', UsuariosSchema);