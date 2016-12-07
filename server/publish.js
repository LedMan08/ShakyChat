import { Meteor } from "meteor/meteor";
//import { CHAT } from "../lib/collections/chat";
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
});