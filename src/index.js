require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

// Database setup

mongoose.connect(
    "mongodb+srv://omnistack:omnistack@cluster0-gamwm.mongodb.net/uploader?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })


app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(morgan("dev"))

app.use(require('./routes'))

app.listen(3333)