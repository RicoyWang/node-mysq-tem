/** 增
    var addSql = 'INSERT INTO user SET ?'
    var usr = {id:1,username:'eee',pwd:'fdawef'}
**/
/** 删
    var addSql = 'DELETE FROM user WHERE id = 1'
**/
/** 改
    var addSql = 'UPDATE user SET username = ? ,pwd = ? WHERE id = ?'
    var newusr = ['edafee','1fdasdfwef',1]
**/
/** 查
    var  addSql = `SELECT * FROM user WHERE id = ${params.id}`;
**/
var mysql = require('mysql');
var config = require('../db/DBConfig.js');
var pool=mysql.createPool(config.onelib)

var sqlUtil = {
    /**
        var rowData = {};
        rowData.id = 5;
        rowData.username = "dfads";
        rowData.pwd = 'fdads';
        sqlUtil.addSql('user',rowData,function(re){
            
        })
    **/
    addSql:function(tableName,newRowData,callback){
        pool.getConnection(function(err,connection){
          if(err){
            console.log(err);
            return;
          }
          connection.query( 'INSERT INTO ' +tableName+ ' SET ?',newRowData,function(err,result){
            connection.release();
            if(err){
              console.log(err);
              return;
            }
            callback(result);
          })
        })
    },
    /** 
        var idJson = {};
        idJson.id = 5;
        sqlUtil.delSql('user',idJson,function(re){
            
        })
    **/
    delSql:function(tableName,idJson,callback){
        pool.getConnection(function(err,connection){
          if(err){
            console.log(err);
            return;
          }
          connection.query( 'DELETE FROM '+ tableName + ' WHERE ?' ,idJson,function(err,result){
            connection.release();

            if(err){
              console.log(err);
              return;
            }
            callback(result);
          })
        })
    },
    /**
        var newInfo = {};
        newInfo.username = 'nodejs';
        newInfo.pwd = 'Jimi';
        var idJson = {'id': 1};
        sqlUtil.changeSql('user',idJson,newInfo,function(re){
            var user = {};
            console.log(re)
        })
    **/
    changeSql:function(tableName,idJson,rowInfo,callback){

        pool.getConnection(function(err,connection){
          if(err){
            console.log(err);
            return;
          }
          connection.query( 'UPDATE ' + tableName + ' SET ? WHERE ?', [rowInfo, idJson],function(err,result){
            connection.release();
            console.log(result)
            if(err){
              console.log(err);
              return;
            }
            callback(result);
          })
        })
    },
    /**
        var idJson = {'id': params.id};
        sqlUtil.checkSql('user',idJson,function(re){
            console.log(re)
        })
    **/
    checkSql:function(tableName,idJson,callback){
        pool.getConnection(function(err,connection){
          if(err){
            console.log(err);
            return;
          }
          connection.query( 'SELECT * FROM ' + tableName + ' where ?', idJson , function(err,result){
            connection.release();
            if(err){
              console.log(err);
              return;
            }else{
                if(result){
                    callback(result.pop())
                }else{
                    callback(result);
                }
            }
            
          })
        })
    },
}
module.exports = sqlUtil ;