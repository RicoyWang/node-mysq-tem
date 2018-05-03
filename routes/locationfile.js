var express = require('express');
var router  = express.Router();
var URL     = require('url');
var fs =require('fs');
var express = require('express');
var router = express.Router();
var documentRoot = '/Users/rico/Desktop/Rico/360/chrome_demo';

router.route('/')
    // 顯示登入表單 (GET http://localhost:3000/login)
    .get(function(req,res,next){
        var url = req.url; 
        //客户端输入的url，例如如果输入localhost:8888/index.html
        //那么这里的url == /index.html 
        console.log(req);
        var file = documentRoot + url;
        
        //E:/PhpProject/html5/websocket/www/index.html 
        fs.readFile( file , function(err,data){
        /*
            一参为文件路径
            二参为回调函数
                回调函数的一参为读取错误返回的信息，返回空就没有错误
                二参为读取成功返回的文本内容
        */
            if(err){
                console.log(err)
                res.writeHeader(404,{
                    'content-type' : 'text/html;charset="utf-8"'
                });
                res.write('<h1>404错误</h1><p>你要找的页面不存在'+req.url+'</p>');
                res.end();
            }else{
                res.writeHeader(200,{
                    'content-type' : 'text/html;charset="utf-8"'
                });
                res.write(data.toString());//将index.html显示在客户端
                res.end();
            }
        });
    })
    // 處理登入表單 (POST http://localhost:3000/login)
    .post(function(req,res,next){
    

    })

module.exports = router;
