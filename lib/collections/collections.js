import {Mongo} from "meteor/mongo";
POSTS=new Mongo.Collection("public");
COMENTS = new Mongo.Collection("coments");
//CHAT = new Mongo.Collection('chat');
ChatRooms = new Meteor.Collection("chatrooms");
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
});
POSTS.allow({
	remove:function(){
		return true;
	},
	"insert":function(){
		return true;
	}
});
COMENTS.allow({
	remove:function(){
		return true;
	},
	update:function(){
		return true;
	},
	insert:function()
	{
		return true;
	}
});
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

var articlesSchema = new SimpleSchema({
	images:{
		type:String,
		optional:true,
		label:"Images"
	},
	text:{
		optional:true,
		type:String
	},
	date:{
		type:Date,
		autoValue:function(){
			return new Date();
		}
	},
	user:{
		type:String,
		autoValue:function(){
			return this.userId
		}
	},
	coments_num:{
		type:Number,
		optional:true
	}
});
POSTS.attachSchema(articlesSchema);

var comentsSchema = new SimpleSchema({
	text : {
		type : String,
		label : "Comentarios"
	},
	current_date : {
		type : Date,
		label : "fecha de publicacion",
		autoValue : function()
		{
			return new Date();
		}
	},
	articuloId:{
		type:String,
		label:"Articulo"		
	},
	user:{
		type:String,
		autoValue:function(){
			return this.userId
		}
	},
	edit:{
		type:Boolean
	}

});
COMENTS.attachSchema(comentsSchema);
