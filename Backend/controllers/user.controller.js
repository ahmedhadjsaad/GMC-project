const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const config = require('config')
const User = require('../model/User')

const secretOrKey = config.get('secretOrKey')

exports.register =async (req,res) => {
    const {name , familyName , email , password } = req.body;
    try {
        const searchRes = await User.findOne({email})
        if(searchRes)
        return res.status(401).json({msg:`user already exist !!`})
        const newUser = new User ({
            name,
            familyName,
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt)
        newUser.password = hash
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({errors : error})
    }
};

exports.userTotal = async (req,res)=> {
  let totalUser = await User.find().estimatedDocumentCount().exec()
  res.json(totalUser)
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      console.log('user',user)
      if (!user) return res.status(404).json({ msg: `bad credentials!` });
      const isMatch = await bcrypt.compare(password,user.password);
      console.log('isMatch', isMatch)
      if (!isMatch) return res.status(401).json({ msg: `bad credentials!!` });
      const payload = {
        id: user._id,
        name: user.name,
        familyName : user.FamilyName,
        email: user.email,
      };
      console.log('payload', payload)
  
      const token = await jwt.sign(payload, secretOrKey);
      return res.status(200).json({ token: `Bearer ${token}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  };
  exports.Rating = async (req,res)=> {
    const {senderName, senderFamilyName , rateValue } = req.body
    try {
      const newRating = await User.findByIdAndUpdate(
        {_id : "5fc0df53e1088b05bc707211" } , 
        {$push : {
          ratings : {
            senderName,
            senderFamilyName,
            rateValue
          }
        }},
        {new : true})
        res.status(201).json(newRating)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  exports.Comment = async(req,res)=> {
    const {sender , comment } = req.body
    try {
      const newComment = await User.findByIdAndUpdate(
        {_id : "5fc0df53e1088b05bc707211"},
        {$push : {
          comments : {
            sender ,
            comment
          }
        }},
        {new : true})
        res.status(201).json(newComment)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }
  
  