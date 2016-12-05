import { Meteor } from "meteor/meteor";
//import { CHAT } from "../lib/collections/chat";
Meteor.startup(() => {
	Meteor.publish("getMsn",function(){
		return CHAT.find();
	});
	Meteor.publish("getUsers",function(){
		return Meteor.users.find();
	});
});