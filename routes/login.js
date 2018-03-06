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


router.get('/login',function(req,res,next){
    var user = {};
    var params = URL.parse(req.url,true).query;
    var rowData = {};
    rowData.id = params.id;
    sqlUtil.checkSql('user',rowData,function(re){
        var user = {};
        // console.log(re)
        // if(re){
        //     user.id = re.id;
        //     user.name = re.username;
        //     user.pwd = re.pwd;
        // }
        var response = {status:203,data:"user"};
        res.send(response);
    })
    

    
})
module.exports = router;
