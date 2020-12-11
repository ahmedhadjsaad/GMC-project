const express = require("express");
const { register, login, Rating, Comment, userTotal } = require("../controllers/user.controller");
const { registerRules, validator  } = require("../middlweware/validator");
const User = require('../model/User')
isAuth = require('../middlweware/passport-setup')

const Router = express.Router();

Router.post(`/Register`,registerRules() , validator,register)
Router.get('/usersTotal', userTotal)
Router.post(`/Login`,login)
Router.post('/Rating' , Rating)
Router.post('/Comment',Comment)
Router.get('/current' , isAuth(),(req,res) =>{
    console.log('req', req) 
    res.json(req.user)
} )
module.exports = Router;

