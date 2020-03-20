const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')


routes.post('/posts', multer(multerConfig).single('file'), (req , resp) => {
    console.log(req.file)

    return resp.json({ hello: 'world' })
})


module.exports = routes