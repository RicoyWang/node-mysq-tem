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
    /**
        'and' : [{'key':'book_name', 'opts':'=', 'value' : '"nodejs"'}, {'key':'author', 'opts':'=', 'value' : '"danhuang"'}],
        'or' : [{'key':'book_id', 'opts':'<', 'value' : 10}]
        };
        var fieldsArr = ['book_id','book_name', 'author', 'time'];//查询结果中显示的字段
        var orderByJson = {'key':'time', 'type':'desc'};//按照时间降序排序
        var limitArr = [0, 3]; //查询结果的前三个
        baseModel.find(tableName, whereJson, orderByJson, limitArr, fieldsArr, function(ret){
            console.log(JSON.stringify(ret));
        });
    **/
    findOptionSql:function(tableName, whereJson, orderByJson, limitArr, fieldsArr, callback){
        var andWhere   = whereJson['and']
            , orWhere    = whereJson['or']
            , andArr = []
            , orArr  = [];
        /* 将数组转换为where and条件array */
        for(var i=0; i<andWhere.length; i++){
            andArr.push(andWhere[i]['key'] + andWhere[i]['opts'] + andWhere[i]['value']);
        }
        /* 将数组转换为where or条件array */
        for(var i=0; i<orWhere.length; i++){
            orArr.push(orWhere[i]['key'] + orWhere[i]['opts'] +orWhere[i]['value']);
        }
        /* 判断条件是否存在，如果存在则转换相应的添加语句 */
        var filedsStr = fieldsArr.length>0 ? fieldsArr.join(',') : '*'
            , andStr    = andArr.length>0    ? andArr.join(' and ') : ''
            , orStr     = orArr.length>0     ? ' or '+orArr.join(' or ') : ''
            , limitStr  = limitArr.length>0  ? ' limit ' + limitArr.join(',') : ''
            , orderStr  = orderByJson ? ' order by ' + orderByJson['key'] + ' ' + orderByJson['type'] : '';
        /* 执行mysql语句 */
        dbClient.query('SELECT ' + filedsStr + ' FROM ' + tableName + ' where ' + andStr + orStr + orderStr + limitStr,
            function(error, results) {
                if (error) {
                    console.log('GetData Error: ' + error.message);
                    dbClient.end();
                    callback(false);
                } else {
                    callback(results);
                }
            });
    }
}
module.exports = sqlUtil ;