Template.chat.helpers({
	/*isUserLogin(){
		return !!Accounts.userId();
	},
	ready(){
		return FlowRouter.subsReady("loadMsn")&&FlowRouter.subsReady("loadUsers");
	},*/
	msnList(){
		return CHAT.find({},{sort:["desc"]});
	}
});

Template.chat.events({
	'submit .chatformMess':function(event){
		event.preventDefault();
		var mensaje = event.target.msn.value;
		//alert(mensaje);
		CHAT.insert({message:mensaje,date:new Date()});    
		event.target.msn.value="";
		//alert(Accounts.userId();
		//alert(Meteor.user().profile.username);
	}

})

