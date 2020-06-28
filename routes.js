const express = require('express')
const UserController = require('./controller/UserController')

const routes = express.Router()


routes.get('/', function(req, res){
    res.send('Olá mundo')
})

routes.get('/user/:name/', UserController.isName)


module.exports = routes