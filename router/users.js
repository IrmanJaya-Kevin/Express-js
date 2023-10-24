const express = require('express');
const router = express.Router();
// const {get,getById,create,destroy,update} =require('../app/controller/users')
const controller=require('../app/controller')


router.get('/users',controller.users.get)
router.get('/users/:id',controller.users.getById)
router.post('/users',controller.users.create)
router.delete('/users/:id',controller.users.destroy)
router.put('/users/:id',controller.users.update)

module.exports = router;