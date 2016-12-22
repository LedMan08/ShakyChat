import { Meteor } from "meteor/meteor";
//import { CHAT } from "../lib/collections/chat";
Meteor.publish("chatrooms",function(){
    return ChatRooms.find({});
});
Meteor.publish("onlusers",function(){
    return Meteor.users.find({"status.online":true},{username:1});
});
Meteor.publish("getUsers",function(){
		return Meteor.users.find();
});
Meteor.startup(() => {
	Meteor.publish("getChat",function(){
		return CHAT.find();
	});
	Meteor.publish("getMessages",function(){
		return MESSAGES.find();
	});
	Meteor.publish("getLikes",function(){
		return LIKES.find();
	});
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
	
	Meteor.methods({
		"addlike":function(id){
			var obj = {"idArt":id};
			//var art = POSTS.findOne(obj);
			//console.log("entra");
			//art.countLikes++;
			
			//alert(con);
			//POSTS.update({${countLikes:con})
			POSTS.update({_id:this._id},{$set:{countLikes:1}});
			LIKES.insert(obj);
			return true;
		},
		"removelike":function(id){
			var obj = {"idArt":id};
			//var art = POSTS.findOne(obj);
			
			//console.log("entra");
			//art.countLikes--;
			POSTS.update({_id:this._id},{$set:{countdisLikes:1}});
			//POSTS.update({countLikes:con2});
			LIKES.remove(obj);
			return true;
		},
		'findUser': function(username) {

    return Meteor.users.findOne({

      username: username

    }, {

      fields: { 'username': 1 }

    });

  },
   'followUser': function(users) {

    Relationships.insert({

      follower: Meteor.users().username,

      following: username

    });

  },
   'recommendUsers': function() {

    if (Meteor.user()) {

      var currentFollowings = UserUtils.findFollowings(Meteor.user().username);

 

      var recUsers = Meteor.users.find({

        username: {

          $nin: currentFollowings

        }

      }, {

        fields: { 'username': 1 },

        limit: 5

      }).fetch();

 

      return recUsers;

    }

  }
	});	
});
