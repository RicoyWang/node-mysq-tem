var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var LeverAdminAPI ={}
var LeverAdminModel = sequelize.define('LeverAdmins', {
    up_user_id: {
        type: Sequelize.STRING
    },
    down_user_id: {
        type: Sequelize.STRING
    },
}, {
    freezeTableName: false
});

var LeverAdmin = LeverAdminModel.sync({force: false});

// 发表新文章
LeverAdminAPI.newPost = function(up_id, down_id) {
    return LeverAdmin.then(function() {
        LeverAdminModel.create({
            taobao_account: taobao_account,
            promotion_name:promotion_name,
            create_at: Date.now()
        });
    });
};
//创建
LeverAdminAPI.NewLever =function(up_id, down_id){
    return LeverAdminModel.create({
        up_id: up_id,
        down_id:down_id,
        create_at: Date.now()
    })
}
// 查找所以
LeverAdminAPI.findAllPosts = function() {
    return LeverAdminModel.findAll();
};

// 通过 ID 查找
LeverAdminAPI.findById = function(id) {
    console.log(id)
    return LeverAdminModel.findById({ where: { up_user_id: id } });
};

module.exports = LeverAdminAPI