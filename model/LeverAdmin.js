var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var LeverAdminAPI ={}
var LeverAdminModel = sequelize.define('LeverAdmins', {
    //是否屏蔽
    up_id: {
        type: Sequelize.STRING
    },
    //是否默认
    down_id: {
        type: Sequelize.STRING
    },
    //创建时间
    create_at: {
        type: Sequelize.DATE
    }
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
    console.log(LeverAdmin)
    return LeverAdminModel.create({
        up_id: up_id,
        down_id:down_id,
        create_at: Date.now()
    })
}
// 查找所以文章
LeverAdminAPI.findAllPosts = function() {
    return LeverAdminModel.findAll();
};

// 通过 ID 查找文章
LeverAdminAPI.findById = function(id) {
    return LeverAdminModel.findById(id);
};

module.exports = LeverAdminAPI