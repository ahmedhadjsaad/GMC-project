const express = require('express');
const { addCommande, findCommandes } = require('../controllers/commande.controller');

const Commandes = require('../model/Commande')

const Router = express.Router();

Router.post('/',addCommande)

Router.get('/',findCommandes)

module.exports = Router;
