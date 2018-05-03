var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var ShoppingGuideTicketSendAPI ={}
var ShoppingGuideTicketSendModel = sequelize.define('ShoppingGuideTicketSends', {
    user_id: {
        type: Sequelize.STRING
    },
    product_id: {
        type: Sequelize.STRING
    },
    reply_uer_id: {
        type: Sequelize.TEXT
    },
    Pid:{
        type: Sequelize.TEXT
    },
}, {
    freezeTableName: false
});

var ShoppingGuideTicketSend = ShoppingGuideTicketSendModel.sync({force: false});

//创建
ShoppingGuideTicketSendAPI.NewPID =function(taobao_account, promotion_name){
    return ShoppingGuideTicketSendModel.create({
        taobao_account: taobao_account,
        promotion_name:promotion_name,
        create_at: Date.now()
    })
}
// 查找所以
ShoppingGuideTicketSendAPI.findAllPosts = function() {
    return ShoppingGuideTicketSendModel.findAll();
};

// 通过 ID 查找
ShoppingGuideTicketSendAPI.findById = function(id) {
    return ShoppingGuideTicketSendModel.findOne({ where: { id: id } });
};
//淘宝账号
ShoppingGuideTicketSendAPI.findByAccount = function(taobao_account) {
    return ShoppingGuideTicketSendModel.findOne({ where: { taobao_account: taobao_account } });
};

module.exports = ShoppingGuideTicketSendAPI