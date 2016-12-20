import {Mongo} from "meteor/mongo";
import { EasySearch } from 'meteor/easy:search';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

POSTS=new Mongo.Collection("public");
COMENTS = new Mongo.Collection("coments");
PERFIL = new Mongo.Collection("perfil");
ChatRooms = new Meteor.Collection("chatrooms");

Meteor.methods({
	'coments.remove'(user){
		check(user,string);
		COMENTS.remove(ComentId);
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
PERFIL.allow({
	update:function(){
		return true;
	},
	insert:function(userId,params){
		return !!userId;
	},
});
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

var perfilSchema = new SimpleSchema({
	user:{
		type:String,
		autoValue:function(){
			return this.userId
		}
	},
	nombre:{
		type:String,
		autoValue:function(){
			return this.user.username
		}
	},
	email:{
		type:String,
		autoValue:function(){
			return this.user.email.address
		}
	},
	ocupacion:{
		type:String,
		label:"Ocupacion"
	},
	lugar:{
		type:String,
		label:"nacimiento"
	}
});

PERFIL.attachSchema(perfilSchema);