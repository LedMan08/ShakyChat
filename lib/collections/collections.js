import {Mongo} from "meteor/mongo";
import { EasySearch } from 'meteor/easy:search';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

CHAT = new Mongo.Collection("chat");
MESSAGES = new Mongo.Collection("messages");

POSTS = new Mongo.Collection("public");
COMENTS = new Mongo.Collection("coments");
PERFIL = new Mongo.Collection("perfil");
ChatRooms = new Meteor.Collection("chatrooms");
LIKES = new Meteor.Collection("likes");
Meteor.methods({
	'coments.remove'(user){
		check(user,string);
		COMENTS.remove(ComentId);
	}
});
MESSAGES.allow({
	insert:function()
	{
		return true;
	}
});
CHAT.allow({
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

LIKES.allow({
	remove:function(){
		return true;
	},
	"insert":function(){
		return true;
	},
	update:function(){
		return true;
	},
}); 
POSTS.allow({
	remove:function(){
		return true;
	},
	"insert":function(){
		return true;
	},
	update:function(){
		return true;
	},
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
PERFIL.allow({
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
var messagesSchema = new SimpleSchema({
	msn: {
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
MESSAGES.attachSchema(messagesSchema);
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
	},
	Likes:{
		optional:true,	
		type:[LIKES]
	},
	countLikes:{
		type:Number,
		defaultValue:0
	},
	countdisLikes:{
		type:Number,
		defaultValue:0
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

var perfilSchema = new SimpleSchema({
	images:{
		type:String,
		optional:true,
		label:"Images"
	},
	ciudad : {
		type : String,
	},
	estado_civil : {
		type : String,
	},
	celular : {
		type : String,
	},
	user:{
		type:String,
		autoValue:function(){
			return this.userId
		}
	}

});
PERFIL.attachSchema(perfilSchema);



COMENTS.attachSchema(comentsSchema);

var likesSchema = new SimpleSchema({
	idArt: {
		optional:true,
		type: String
	},
	IdUser: {
		type: String,
		autoValue:function(){
			return this.userId;
		}
	}
});
LIKES.attachSchema(likesSchema);

var chatSchema = new SimpleSchema({
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
UserUtils = function() {};    //no var in front

UserUtils.findFollowings = function(username) { 

  var currentFollowings = Relationships.find({

    follower: username

  }).fetch().map(function(data) {

    return data.following;

  });

  currentFollowings.push(Meteor.user().username);

 

  return currentFollowings;

};	