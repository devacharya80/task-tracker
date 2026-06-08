require("dotenv").config();
const express = require('express');
const app = express()
const cors = require('cors')

const connectToDb = require("./config/db.js")

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 5000;

connectToDb()

app.listen(PORT,()=>{
    console.log(`Server is Listening at ${PORT}`)
})