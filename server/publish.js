import { Meteor } from "meteor/meteor";
//import { CHAT } from "../lib/collections/chat";
Meteor.publish("chatrooms",function(){
    return ChatRooms.find({});
});
Meteor.publish("onlusers",function(){
    return Meteor.users.find({"status.online":true},{username:1});
})
Meteor.startup(() => {
	Meteor.publish("getMsn",function(){
		return CHAT.find();
	});
	Meteor.publish("getUsers",function(){
		return Meteor.users.find();
	});
	//publicaion para la base de datos POSTS
	Meteor.publish("getPublic",function(){
		return POSTS.find();
	});
	Meteor.publish("getComent",function(){
		return COMENTS.find();
	});
	Meteor.publish("getPerfil",function(id){
		return PERFIL.find({user:id});
	});
});
