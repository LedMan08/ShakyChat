
Template.modal.events({
	"submit .registro-usuario":function(event){
		event.preventDefault();
		var usuario=$('[name=Us]').val();
		var email=$('[name=EmailUs]').val();
		var password=$('[name=PassUs]').val();
		var	passRep=event.target.PassUsR.value;
		if(password==passRep){
			Accounts.createUser({
		        username:usuario,
		        email: email,
		        password: password
		        
		    }, function(err){
		    	if(err){
		    		console.log("error de autenticacion");
		    		alert("el correo ya esta en uso");
		    	}
		    	else{
		    		alert("Usuario registrado correctamente");
		    		$("#modal-id").modal("hide");
		    		document.getElementById("registro-form").reset();
		    		
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
        		alert("REGISTRO NO ENCONTRADO, VERIFIQUE USUARIO O CONTRASEÑA");
        	}
        });
        
    }
});
Template.salir.events({
    'click .logout': function(event){
        event.preventDefault();
        FlowRouter.go("/");
        Meteor.logout();
        controlTem.set(false);
    }
});
Template.logUsuario.helpers({
	UsurList(){
		alert(Meteor.users.find());
		return Meteor.users.find();

	},
});
