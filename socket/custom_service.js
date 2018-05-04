function customService(socket) {
    //接收并处理客户端发送的foo事件
    //昵称设置
    socket.on('login', function(nickname) {
        if (users.indexOf(nickname) > -1) {
            socket.emit('nickExisted');
        } else {
            socket.userIndex = users.length;
            socket.nickname = nickname;
            users.push(nickname);
            socket.emit('loginSuccess');
            io.sockets.emit('system', nickname); //向所有连接到服务器的客户端发送当前登陆用户的昵称 
        };
    })
  }
  module.exports  = customService