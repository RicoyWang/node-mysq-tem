var Sequelize = require('sequelize');
var sequelize = require('../db/sequelizeDB/sequelizeConfig.js');
var ShowProblemAPI ={}
var ShowProblemModel = sequelize.define('ShowProblems', {
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

var ShowProblem = ShowProblemModel.sync({force: false});


//创建
ShowProblemAPI.NewLever =function(up_id, down_id){
    console.log(ShowProblem)
    return ShowProblemModel.create({
        up_id: up_id,
        down_id:down_id,
        create_at: Date.now()
    })
}
// 查找所以文章
ShowProblemAPI.findAllPosts = function() {
    return ShowProblemModel.findAll();
};

// 通过 ID 查找文章
ShowProblemAPI.findById = function(id) {
    return ShowProblemModel.findById(id);
};

module.exports = ShowProblemAPI