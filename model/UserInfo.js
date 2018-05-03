var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');

var Post = sequelize.define('post', {
    // 文章标题
    title: {
        type: Sequelize.STRING
    },
    // 文章内容
    content: {
        type: Sequelize.STRING
    },
    // 文章发表时间
    create_at: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: false
});

var post = Post.sync();



// 查找所以文章
exports.findAllPosts = function() {
    return Post.findAll();
};

// 通过 ID 查找文章
exports.findById = function(id) {
    return Post.findById(id);
};