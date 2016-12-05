Template.chat.helpers({
	msnList(){
		return CHAT.find({});
	},
});

Template.chat.events({
	'submit .chatformMess':function(event){
		event.preventDefault();
		var mensaje = event.target.msn.value;
		//alert(mensaje);
		CHAT.insert({message:mensaje,date:new Date()});    
		event.target.msn.value="";
	}
})