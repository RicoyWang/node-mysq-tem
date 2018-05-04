    class SocketControl {
        constructor(socket,io){
            this.socket = socket
            this.io = io
            return this
        }
        _init(){
            this._socketLinsentOn_login()
            this._socketLinsentOn_disconnect()
            this._socketLinsentOn_postMsg()
            this._socketLinsentOn_foo()
        }
        _socketLinsentOn_login(){
            let socket = this.socket
            let io = this.io
            socket.on('login', function(nickname) {
                console.log(nickname,users)
                if (users.indexOf(nickname) > -1) {
                    socket.emit('nickExisted');
                } else {
                    socket.userIndex = users.length;
                    socket.nickname = nickname;
                    users.push(nickname);
                    socket.emit('loginSuccess');
                    io.sockets.emit('system', nickname,users.length, 'login'); //向所有连接到服务器的客户端发送当前登陆用户的昵称 
                };
            })
        }
        _socketLinsentOn_disconnect(){
            let socket = this.socket
                //断开连接的事件
            socket.on('disconnect', function() {
                //将断开连接的用户从users中删除
                users.splice(socket.userIndex, 1);
                //通知除自己以外的所有人
                socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
            });
        }
        _socketLinsentOn_postMsg(){
            let socket = this.socket
            socket.on('postMsg', function(msg) {
                //将消息发送到除自己外的所有用户
                socket.broadcast.emit('newMsg', socket.nickname, msg);
            });
        }
        _socketLinsentOn_foo(){
            let socket = this.socket
            socket.on('foo',(res)=>{
                console.log(res)
            })
        }
    }
function customService(io) {
    return function (socket) {

        var soket = new SocketControl(socket,io)
        soket._init()
        
    }
  }
  module.exports  = customService