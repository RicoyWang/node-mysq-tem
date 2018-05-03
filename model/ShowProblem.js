var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var ShowProblemAPI ={}
var ShowProblemModel = sequelize.define('ShowProblems', {
    user_id: {
        type: Sequelize.STRING
    },
    wechat_name: {
        type: Sequelize.STRING
    },
    context: {
        type: Sequelize.TEXT
    },
}, {
    freezeTableName: false
});

var ShowProblem = ShowProblemModel.sync({force: false});


//创建
ShowProblemAPI.NewPID =function(taobao_account, promotion_name){
    return ShowProblemModel.create({
        taobao_account: taobao_account,
        promotion_name:promotion_name,
        create_at: Date.now()
    })
}
// 查找所以
ShowProblemAPI.findAllPosts = function() {
    return ShowProblemModel.findAll();
};

// 通过 ID 查找
ShowProblemAPI.findById = function(id) {
    return ShowProblemModel.findOne({ where: { id: id } });
};
//淘宝账号
ShowProblemAPI.findByAccount = function(taobao_account) {
    return ShowProblemModel.findOne({ where: { taobao_account: taobao_account } });
};


module.exports = ShowProblemAPI