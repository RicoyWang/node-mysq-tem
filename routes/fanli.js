var express = require('express');
var router  = express.Router();
var URL     = require('url');
var router = require('express').Router();
var PidAdminAPI = require('../model/PidAdmin.js')
 
router.route('/')
    // 顯示登入表單 (GET http://localhost:3000/login)
    .get(function(req,res){
        console.log(res)
        PidAdminAPI.NewPID('posttitle', 'postcontent').then(function() {
            return PidAdminAPI.findByAccount('posttitle');
        }).then(function(p) {
            console.log('********************************');
            console.log(p)
            console.log('post title:', p[0].title);
            console.log('post content:', p[0].content);
        }).catch(function(er){
            console.log('er')
        });
        res.send('this is the fanli page'); 
    })
    // 處理登入表單 (POST http://localhost:3000/login)
    .post(function(req,res,next){
    
    })

module.exports = router;
