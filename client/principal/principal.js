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
    },
    'submit form': function(event) {

    var searchUser = event.target.searchUser.value;



    var foundUser = Meteor.call('findUser', searchUser, function(err, res) {
    

      if (res) Session.set('foundUser', res);

    });

    return false;

    },
     'click #follow': function() {

    Meteor.call('followUser', Session.get('foundUser').username);
    alert(followus)

  },
  'click #followRec': function(event) {

    Meteor.call('followUser', this.username);

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
    },
     'foundUser': function() {

    return Session.get('foundUser');

  },
   'recommendedUsers': function() {

    return Session.get('recommendedUsers');

  }

});
Template.principal.onRendered(function () { 

  Meteor.call('recommendUsers', function(err, res) {

    Session.set('recommendedUsers', res);

  });

});



