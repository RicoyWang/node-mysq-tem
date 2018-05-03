var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var FriendAdminAPI ={}
var FriendAdminModel = sequelize.define('FriendAdmins', {
    //是否屏蔽
    user_id: {
        type: Sequelize.STRING
    },
    //是否默认
    wechat_name: {
        type: Sequelize.STRING
    },
    context: {
        type: Sequelize.TEXT
    },
    //创建时间
    create_at: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: false
});

var FriendAdmin = FriendAdminModel.sync({force: false});

//创建
FriendAdminAPI.NewLever =function(up_id, down_id){
    console.log(FriendAdmin)
    return FriendAdminModel.create({
        up_id: up_id,
        down_id:down_id,
        create_at: Date.now()
    })
}
// 查找所以文章
FriendAdminAPI.findAllPosts = function() {
    return FriendAdminModel.findAll();
};

// 通过 ID 查找文章
FriendAdminAPI.findById = function(id) {
    return FriendAdminModel.findById(id);
};

module.exports = FriendAdminAPI