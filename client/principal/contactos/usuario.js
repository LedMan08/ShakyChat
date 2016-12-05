 Template.usuario.helpers({
	/*isUserLogin(){
		return !!Accounts.userId();
	},
	readyConect(){
		return FlowRouter.subsReady("loadMsn")&&FlowRouter.subsReady("loadUsers");
	},*/
	Conect(){
		var logUsuario=Accounts.users.findOne({_id:this._id});
		//console.log(logUsuario.profile.username);
		return logUsuario.profile.username;
	},
	UsLogin(){
		return Meteor.users.find();
	}
});
 /*Template.chat.events({
	'submit .chatformMess':function(event){
		event.preventDefault();
		var mensaje = event.target.msn.value;
		//alert(mensaje);
		CHAT.insert({message:mensaje,date:new Date()});    
		event.target.msn.value="";
		//alert(Accounts.userId();
		//alert(Meteor.user().profile.username);
	}

})*/
/*
Tempalte.usuario.events({
	'click #UsButton':function(event){
		event.preventDefault();
			FlowRouter.go("chat");
	}
});*/