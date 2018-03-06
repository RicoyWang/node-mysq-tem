var express = require('express');
var router  = express.Router();
var URL     = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getUserInfo',function(req,res,next){
    var user = {};
    var params = URL.parse(req.url,true).query;
    if(params.id == '1'){
        user.name = 'ligh';
        user.age = '1';
        user.city = '北京';
    }else{
        user.name = "SPT";
        user.age = '2';
        user.city = '杭州';
    }
    var response = {status:1,data:user};
    
    res.send(JSON.stringify(response))
})
module.exports = router;
