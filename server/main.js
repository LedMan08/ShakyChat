import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startu
  Meteor.publish("getMsn",function(){
		return CHAT.find();
	});
	Meteor.publish("getUsers",function(){
		return Meteor.users.find();
	})
});
