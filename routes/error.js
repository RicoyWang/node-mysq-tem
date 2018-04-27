var express = require('express');
var router  = express.Router();


router.route('')
    // 顯示登入表單 (GET http://localhost:3000/login)
    .get(function(req,res){
        res.render('error',{error:{status:404,stack:'NO FOUND!!'}})
    })
    function updateRandom() {
  var p = Math.random(), n = Math.random() / 4;

  if( p < 0.02 )
    return 0 + n;

  if( p < 0.04 )
    return 0.25 + n;

  if( p < 0.08 )
    return 0.5 + n;

  if( p < 0.85 )
    return 0.85 + n;
  if( p < 1 )
    return 0.95 + n;
}

module.exports = router;