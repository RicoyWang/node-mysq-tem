var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var PidAdminAPI ={}
var PidAdminModel = sequelize.define('PidAdmins', {
    // 淘宝账号
    taobao_account: {
        type: Sequelize.STRING
    },
    // 推广名称
    promotion_name: {
        type: Sequelize.STRING
    },
    // 账号ID
    account_ID: {
        type: Sequelize.STRING
    },
    //推广位
    create_at: {
        type: Sequelize.STRING
    },
    //PID
    promotion_place: {
        type: Sequelize.STRING
    },
    //是否屏蔽
    is_shield: {
        type: Sequelize.STRING
    },
    //是否默认
    is_default: {
        type: Sequelize.STRING
    },
    //创建时间
    create_at: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: false
});

var PidAdmin = PidAdminModel.sync({force: false});

// 发表新文章
PidAdminAPI.newPost = function(taobao_account, promotion_name) {
    return PidAdmin.then(function() {
        PidAdminModel.create({
            taobao_account: taobao_account,
            promotion_name:promotion_name,
            create_at: Date.now()
        });
    });
};
//创建
PidAdminAPI.NewPID =function(taobao_account, promotion_name){
    console.log(PidAdmin)
    return PidAdminModel.create({
        taobao_account: taobao_account,
        promotion_name:promotion_name,
        create_at: Date.now()
    })
}
// 查找所以文章
PidAdminAPI.findAllPosts = function() {
    return PidAdminModel.findAll();
};

// 通过 ID 查找文章
PidAdminAPI.findById = function(id) {
    return PidAdmin.findById(id);
};

module.exports = PidAdminAPI