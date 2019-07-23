class ChatPlatform{
    setup(){
        throw new Error('You have to implement the method setup!');
    }

    sendMsg(message){
        throw new Error('You have to implement the method sendMsg!');
    }

    registerCallback(callback){
        throw new Error('You have to implement the method registerCallback!');
    }
}

module.exports = ChatPlatform