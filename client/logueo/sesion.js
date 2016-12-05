
Template.modal.events({
	"submit .registro-usuario":function(event){
		event.preventDefault();
		var usuario=$('[name=Us]').val();
		var email=$('[name=EmailUs]').val();
		var password=$('[name=PassUs]').val();
		var	passRep=event.target.PassUsR.value;
		if(password==passRep){
			Accounts.createUser({
		        email: email,
		        password: password,
		        profile: {
		        	username:usuario
		        }
		    }, function(err){
		    	if(err){
		    		console.log("error de autenticacion");
		    		alert("el correo ya esta en uso");
		    	}
		    	else{
		    		alert("Usuario registrado correctamente");
		    		document.getElementById("registro-form").reset();
		    		
		    		//document.getElementById("registro-form").modal("toggle");
		    		//FlowRouter.go("/principal");
		    		//$('[data-dismiss=modal]');
		    	}
		    });
		    
		}
		else{
			alert("el password no esigual");
			event.target.PassUsR.focus();
		}
	}
});	
Template.logUsuario.events({
	'submit form': function(event) {
        event.preventDefault();
        var logUs=$('[name=us]').val();
		var logPass=$('[name=pass]').val();
        Meteor.loginWithPassword(logUs, logPass,function(error){
        	if(error){
        		alert(error.reason);
        	}
        });
        
    }
});
Template.salir.events({
    'click .logout': function(event){
        event.preventDefault();
        FlowRouter.go("/");
        Meteor.logout();

    }
});
Template.logUsuario.helpers({
	UsurList(){
		alert(Meteor.users.find());
		return Meteor.users.find();

	},
});
