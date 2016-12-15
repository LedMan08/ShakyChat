/*
Template.chat.helpers({
	/*isUserLogin(){
		return !!Accounts.userId();
	},
	ready(){
		return FlowRouter.subsReady("loadMsn")&&FlowRouter.subsReady("loadUsers");
	},//
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
*/

Accounts.ui.config({
   passwordSignupFields: 'USERNAME_AND_EMAIL'
});
Tracker.autorun(function(){
    Meteor.subscribe("chatrooms");
    Meteor.subscribe("onlusers");
});

Template.sidebar.helpers({
    'onlusr':function(){
        return Meteor.users.find({ "status.online": true , _id: {$ne: Meteor.userId()} });
    }

});
var usuario = new ReactiveVar(); 
//usuario ="holasasdad"; 
Template.sidebar.events({
    'click .user':function(){
        Session.set('currentId',this._id);
        var res=ChatRooms.findOne({chatIds:{$all:[this._id,Meteor.userId()]}});
        if(res)
        {
            //already room exists
            Session.set("roomid",res._id);

        }
        else{
            //no room exists
            var newRoom= ChatRooms.insert({chatIds:[this._id , Meteor.userId()],messages:[]});
            Session.set('roomid',newRoom);

        }
        var logUsuario=Accounts.users.findOne({_id:this._id});
        usuario.set(logUsuario.username);
        //alert(usuario);
    }
       
    
});

Template.messages.helpers({
    'msgs':function(){
        var result=ChatRooms.findOne({_id:Session.get('roomid')});
        if(result){
          return result.messages;
        }
    },
    usuActo(){
        return usuario.get();
    }
});

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { 
        if (Meteor.user())
        {
              var name = Meteor.user().username;
              var message = document.getElementById('message');
    
              if (message.value !== '') {
                var de=ChatRooms.update({"_id":Session.get("roomid")},{$push:{messages:{
                 name: name,
                 text: message.value,
                 createdAt: Date.now()
                }}});
                document.getElementById('message').value = '';
                message.value = '';
              }
        }
        else
        {
           alert("No esta logueado");
        }
       
    }
  }
}
