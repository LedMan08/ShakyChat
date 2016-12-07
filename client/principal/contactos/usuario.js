Template.usuario.helpers({
	/*isUserLogin(){
		return !!Accounts.userId();
	},
	*/
	Conect(){
		var logUsuario=Accounts.users.findOne({_id:this._id});
		//console.log(logUsuario.profile.username);
		
		return logUsuario.profile.username;

	},
	UsLogin(){
		return Meteor.users.find();
	},
	/*usuario(){
		return Meteor.user().profile.username;
	}*/
});

