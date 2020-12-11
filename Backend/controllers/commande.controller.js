const config = require("config");

const Commandes = require("../model/Commande");

exports.addCommande = async (req, res) => {
  const {
    name,
    familyName,
    adresse,
    codePostal,
    phoneNumber,
    total,
    cartItems,
  } = req.body;
  try {
    const newCommande = new Commandes({
      name,
      familyName,
      adresse,
      codePostal,
      phoneNumber,
      total,
      cartItems,
    });
    await newCommande.save();
    res.status(201).json(newCommande);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

exports.findCommandes=async (req, res) => {
  try {
    const commande = await Commandes.find();
    res.json(commande);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};
