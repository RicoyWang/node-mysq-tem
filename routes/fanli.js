var express = require('express');
var router  = express.Router();
var URL     = require('url');
var router = require('express').Router();
var LeverAdminAPI = require('../model/LeverAdmin.js')
 
router.route('/')
    // 顯示登入表單 (GET http://localhost:3000/login)
    .get(function(req,res){
        console.log(res)
        LeverAdminAPI.NewLever('121', 'afda').then(function() {
            // 通过 ID 查找文章
            return LeverAdminAPI.findById(1);
        }).then(function(p) {
            console.log('********************************');
            console.log('post title:', p.title);
            console.log('post content:', p.content);
        }).catch(function(er){
            console.log('er')
        });
        res.send('this is the fanli page'); 
    })
    // 處理登入表單 (POST http://localhost:3000/login)
    .post(function(req,res,next){
    
    })

module.exports = router;
