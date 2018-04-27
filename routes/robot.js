var express = require('express');
var router  = express.Router();
var URL     = require('url');
var mysql  = require('mysql');
var config = require('../db/DBConfig.js');
var sqlUtil = require('../db/sqlpool.js');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var express = require('express');
var router = express.Router();

router.route('/')
    // 顯示登入表單 (GET http://localhost:3000/login)
    .get(function(req,res){
        console.log(res)
        res.send('this is the robot'); 
    })
    // 處理登入表單 (POST http://localhost:3000/login)
    .post(function(req,res,next){
    
        // var params = URL.parse(req.url,true).query;
        var rowData = {};
        rowData.username = req.body.name;
        sqlUtil.checkSql('user',rowData,function(re){
            var data ={code:''};
            console.log(re)
            if(re && re.pwd == req.body.pwd ){
                res.status(200).json({ status:200,msg: {code:200,ms:'ds'}});
            }else{
                res.redirect('/404');
            }
            
        })
    })

module.exports = router;
