const mongoose = require('mongoose')

const CommandeSchema = mongoose.Schema({
    name : String,
    familyName : String,
    adresse : String,
    codePostal : String,
    phoneNumber : String,
    total : Number,
    cartItems : {}
})

module.exports = Commandes = mongoose.model('Commandes', CommandeSchema);
