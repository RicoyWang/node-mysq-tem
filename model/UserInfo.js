var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var UserInfoAPI ={}
/**
    user_id:'',
    wechat_name:'',
    name:'',
    alipay_account:'',
    all_withdrawal_amount:'',
    able_withdrawal_amount:'',
    unaccepted_amount:'',
    all_succuse_order:'',
    check_number:'',
    check_reward:'',
    check_date:'',
    promotion_reward:'',
    direct_scale:'',
    PID:'',
    wechat_public_account:''
 */
var UserInfoModel = sequelize.define('UserInfos', {
    // 用户ID
    user_id: {
        type: Sequelize.STRING
    },
    // 微信名
    wechat_name: {
        type: Sequelize.STRING
    },
    // 姓名
    name: {
        type: Sequelize.STRING
    },
    //支付宝账号
    alipay_account: {
        type: Sequelize.STRING
    },
    //总提现金额
    all_withdrawal_amount: {
        type: Sequelize.STRING
    },
    //可提现金额
    able_withdrawal_amount: {
        type: Sequelize.STRING
    },
    //未收货金额
    unaccepted_amount: {
        type: Sequelize.STRING
    },
    //总成功订单
    all_succuse_order: {
        type: Sequelize.STRING
    },
    //签到次数
    check_number: {
        type: Sequelize.STRING
    },
    //签到奖励
    check_reward: {
        type: Sequelize.STRING
    },
    //签到时间
    check_date: {
        type: Sequelize.STRING
    },
    //推广奖励
    promotion_reward: {
        type: Sequelize.STRING
    },
    //定向比例
    direct_scale: {
        type: Sequelize.STRING
    },
    //独立PID
    PID: {
        type: Sequelize.STRING
    },
    //公众号对应ID
    wechat_public_account: {
        type: Sequelize.STRING
    },
}, {
    freezeTableName: false
});

var UserInfo = UserInfoModel.sync({force: false});

//创建
/**
 * 
 * @param {*} userInfoObj ={
        user_id:'',
        wechat_name:'',
        name:'',
        alipay_account:'',
        all_withdrawal_amount:'',
        able_withdrawal_amount:'',
        unaccepted_amount:'',
        all_succuse_order:'',
        check_number:'',
        check_reward:'',
        check_date:'',
        promotion_reward:'',
        direct_scale:'',
        PID:'',
        wechat_public_account:''
    } 
 */
UserInfoAPI.NewUser =function(userInfoObj){
    return UserInfoModel.create(userInfoObj)
}
// 查找所以文章
UserInfoAPI.findAllPosts = function() {
    return UserInfoModel.findAll();
};

// 通过 ID 查找文章
UserInfoAPI.findById = function(id) {
    return UserInfoModel.findOne({ where: { id: id } });
};
//用户账号
UserInfoAPI.findByAccount = function(user_id) {
    return UserInfoModel.findOne({ where: { user_id: user_id } });
};
//自选查找条件
UserInfoAPI.findBySome = function(req) {
    return UserInfoModel.findOne({ where: req });
};

module.exports = UserInfoAPI