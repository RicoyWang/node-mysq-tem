var express = require('express');
var router  = express.Router();
var URL     = require('url');
var router = require('express').Router();
var UserInfoAPI = require('../model/UserInfo.js')
 
router.route('/')
    // 顯示登入表單 (GET http://localhost:3000/login)
    .get(function(req,res){
        var userInfoObj = {}
        userInfoObj= {
            user_id : 'wx_dfae121932',
            name : '王小草',
        }
        UserInfoAPI.findBySome(userInfoObj).then(function(userinfo) {
            res.send('姓名 :' + userinfo.dataValues.name);
        }).catch(function(er){
            console.log('er')
        });
    })
    // 處理登入表單 (POST http://localhost:3000/login)
    .post(function(req,res,next){
    
    })

module.exports = router;
