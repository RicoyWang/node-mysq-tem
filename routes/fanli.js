var express = require('express');
var router  = express.Router();
var URL     = require('url');
var express = require('express');
var router = express.Router();



    let User = sequelize.define('PID管理', {
        taobaoId: Sequelize.TEXT,
      });
      
router.route('/')
    // 顯示登入表單 (GET http://localhost:3000/login)
    .get(function(req,res){
        console.log(res)
        sequelize.sync().then(function () {
            return User.create({
                taobaoId: '2',
            }).then(function () {
              console.log(jane.get({
                plain: true
              }));
            })
          })
        res.send('this is the fanli page'); 
    })
    // 處理登入表單 (POST http://localhost:3000/login)
    .post(function(req,res,next){
    
    })

module.exports = router;
