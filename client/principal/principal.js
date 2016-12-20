var UsChat = new ReactiveVar(false); 

Template.usuario.events({
    "click #UsButton":function(e){

        e.preventDefault();
        var logUsuario=Accounts.users.findOne({_id:this._id});
        //console.log(logUsuario.profile.username);
        

       // alert(logUsuario.profile.username);
        //alert(UsChat);
        UsChat.set(true);
    }

 });
controlTem = new ReactiveVar(false);
Template.principal.events({
    "click #perfil":function(e){
        e.preventDefault();
        controlTem.set(true);
        //var logUsuario=Accounts.users.findOne({_id:this._id});
       // alert('tu perfil');
    },
    "click #princi":function(e){
        e.preventDefault();
        //alert('tu pajina principal');
        controlTem.set(false);
    }
 });
Template.principal.helpers({
    showUs(){
        return UsChat.get();
    },
    usuA(){
        return Meteor.user().username;
    },
    control(){
        return controlTem.get();
    }
});



