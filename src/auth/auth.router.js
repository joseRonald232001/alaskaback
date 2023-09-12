const router=require('express').Router();



const postLogin =require('./auth.services')

router.post('/',postLogin)

module.exports = router