require("dotenv").config();
const express = require('express');
const app = express()
const cors = require('cors')

const connectToDb = require("./config/db.js")
const authRouter = require("./routes/authRoutes.js")

app.use(cors());
app.use(express.json())

app.use("/api/auth",authRouter)

const PORT = process.env.PORT || 5000;

connectToDb()

app.listen(PORT,()=>{
    console.log(`Server is Listening at ${PORT}`)
})