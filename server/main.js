/*import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startu
});*/
Meteor.startup(function(){
	
	UploadServer.init({
	    tmpDir: process.env.PWD + '/.tmp',
	    uploadDir: process.env.PWD + '/.uploads/',
	    checkCreateDirectories: true //create the directories for you
	  });
});
