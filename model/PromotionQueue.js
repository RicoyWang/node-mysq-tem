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
    //创建时间
    create_at: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: false
});

var PromotionQueue = PromotionQueueModel.sync({force: false});

//创建
PromotionQueueAPI.NewLever =function(up_id, down_id){
    console.log(PromotionQueue)
    return PromotionQueueModel.create({
        up_id: up_id,
        down_id:down_id,
        create_at: Date.now()
    })
}
// 查找所以文章
PromotionQueueAPI.findAllPosts = function() {
    return PromotionQueueModel.findAll();
};

// 通过 ID 查找文章
PromotionQueueAPI.findById = function(id) {
    return PromotionQueueModel.findById(id);
};

module.exports = PromotionQueueAPI