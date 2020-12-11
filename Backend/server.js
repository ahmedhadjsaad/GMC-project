const express = require('express')
const cors = require('cors')

const dbconnect = require('./config/dbConnect')
const router = require('./Routes/user')

const app = express()
app.use(cors())
app.use(express.json())
dbconnect();
app.use('/',router)

app.use('/product', require('./Routes/product'))
app.use('/Commande',require('./Routes/commande'))
app.use('/cloudinary',require('./Routes/cloudinary'))


const PORT =  4000
app.listen(PORT,(err)=>
err ? console.error(err) : console.log(`🚀 is 🏃 on port ${PORT}`)
)