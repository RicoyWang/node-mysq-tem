var express = require('express');
var router  = express.Router();


router.route('')
    // 顯示登入表單 (GET http://localhost:3000/login)
    .get(function(req,res){
        res.render('error',{error:{status:404,stack:'NO FOUND!!'}})
    })

module.exports = router;