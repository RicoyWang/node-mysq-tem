var express = require('express');
var router = express.Router();

router.route('/')
    // 顯示登入表單 (GET http://localhost:3000/login)
    .get(function(req,res){
        res.send('this is the login form'); 
    })
    // 處理登入表單 (POST http://localhost:3000/login)
    .post(function(req,res){
        console.log('processing');
        res.send('processing the login form');
    });


module.exports = router;