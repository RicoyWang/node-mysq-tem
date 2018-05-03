let ENV = require('../../env/env.js')
let config = require('../DBConfig.js').fanli;
let Sequelize = require('sequelize');


//sequelize 实例
module.exports   = new Sequelize(config.database, config.user, config.password,{
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: config.pool.max, // 连接池中最大连接数量
        min: config.pool.min, // 连接池中最小连接数量
        idle: config.pool.idle // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    }
    });