const express = require('express');
const router = express.Router();
const {get,getById,create,destroy,update} =require('../app/controller/users')


router.get('/users',get)
router.get('/users/:id',getById)
router.post('/users',create)
router.delete('/users/:id',destroy)
router.put('/users/:id',update)

module.exports = router;