var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var ShoppingGuideTicketSendAPI ={}
var ShoppingGuideTicketSendModel = sequelize.define('ShoppingGuideTicketSends', {
    //是否屏蔽
    user_id: {
        type: Sequelize.STRING
    },
    //是否默认
    product_id: {
        type: Sequelize.STRING
    },
    reply_uer_id: {
        type: Sequelize.TEXT
    },
    Pid:{
        type: Sequelize.TEXT
    },
    //创建时间
    create_at: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: false
});

var ShoppingGuideTicketSend = ShoppingGuideTicketSendModel.sync({force: false});

//创建
ShoppingGuideTicketSendAPI.NewLever =function(up_id, down_id){
    console.log(ShoppingGuideTicketSend)
    return ShoppingGuideTicketSendModel.create({
        up_id: up_id,
        down_id:down_id,
        create_at: Date.now()
    })
}
// 查找所以文章
ShoppingGuideTicketSendAPI.findAllPosts = function() {
    return ShoppingGuideTicketSendModel.findAll();
};

// 通过 ID 查找文章
ShoppingGuideTicketSendAPI.findById = function(id) {
    return ShoppingGuideTicketSendModel.findById(id);
};

module.exports = ShoppingGuideTicketSendAPI