import {Mongo} from "meteor/mongo";
//CHAT = new Mongo.Collection('chat');
CHAT = new Mongo.Collection("chat");
CHAT.allow({
	insert:function(userId,params)
	{
		return !!userId;
	}
});
