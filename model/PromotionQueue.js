var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var PromotionQueueAPI ={}
var PromotionQueueModel = sequelize.define('PromotionQueues', {
    //上级对应ID
    up_user_id: {
        type: Sequelize.STRING
    },
    //下级对应ID
    down_user_id: {
        type: Sequelize.STRING
    },
}, {
    freezeTableName: false
});

var PromotionQueue = PromotionQueueModel.sync({force: false});

//创建
PromotionQueueAPI.NewPID =function(taobao_account, promotion_name){
    return PromotionQueueModel.create({
        taobao_account: taobao_account,
        promotion_name:promotion_name,
        create_at: Date.now()
    })
}
// 查找所以
PromotionQueueAPI.findAllPosts = function() {
    return PromotionQueueModel.findAll();
};

// 通过 ID 查找
PromotionQueueAPI.findById = function(id) {
    return PromotionQueueModel.findOne({ where: { id: id } });
};
//淘宝账号
PromotionQueueAPI.findByAccount = function(taobao_account) {
    return PromotionQueueModel.findOne({ where: { taobao_account: taobao_account } });
};

module.exports = PromotionQueueAPI