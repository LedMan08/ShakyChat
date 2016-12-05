import {Mongo} from "meteor/mongo";
//CHAT = new Mongo.Collection('chat');
CHAT = new Mongo.Collection("chat",{
	transform:function(row){ 
		var user = Meteor.users.findOne({_id:row.user});
		if(!!user.profile)
		{
			row.username = user.profile.name; 
		}
		if(!!user.emails)
		{
			row.username = user.emails[0].address;
		}
		return row;
	}
});
CHAT.allow({
	insert:function(userId,params)
	{
		return !!userId;
	}
})

var chatSchema = new SimpleSchema({
	message: {
		type:String
	},
	date: {
		type:Date,
		autoValue:function() {
			return new Date();
		}
	},
	user: {
		type:String,
		autoValue:function(){
			return this.userId;
		}
	}
});

CHAT.attachSchema(chatSchema);
