const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

const app = express()

//connect to MongoDB

connectDB()


//middleware 

app.use(express.json())

//routes 
app.get('/', (req, res) => {
    res.send('Job Portal API')
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})