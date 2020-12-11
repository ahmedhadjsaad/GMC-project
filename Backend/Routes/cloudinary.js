const express = require('express')
const Router = express.Router();

const {upload , remove} = require('../controllers/cloudinary.controller')

Router.post('/uploadImage', upload)
Router.post('/removeImage',remove)
module.exports = Router;
