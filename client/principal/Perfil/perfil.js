//Template.perfil.test ="hola MUNDO";


//Template.perfil.test ="hola MUNDO";
URL2=new ReactiveVar("");
Template.perfil.helpers({
  URL2(){
    return URL2.get();
  },
  perfilCallback : function(){
    return {
        finished: function(index, fileInfo, templateContex){
          URL2.set(fileInfo.url);
          console.log(fileInfo);
      }
    }
  }
});
Template.perfil.helpers({
  UserPerfil:function(){
    if(Accounts.user().profile!=undefined)
    {
      return Accounts.user().emails.address;
    }else{
      return Accounts.user().username;
    }
  }
});
Template.perfil.events({
  "click #guardar2":function(e){
    e.preventDefault();
    var r=$("#perfil1").serializeObject();
    profile = PERFIL.findOne({user:Accounts.user()._id});
    console.log(r);
    if(profile!=null){
      
      PERFIL.update({_id:profile._id},{$set:r});
      POSTS.insert(r);
      $("#Editar").modal("hide");
    }
    else{

      PERFIL.insert(r);
      $("#Editar").modal("hide");
    }
  },
  "click #guardar3":function(e){
    e.preventDefault();
    var r=$("#perfil2").serializeObject();
    profile = PERFIL.findOne({user:Accounts.user()._id});
    console.log(r);
    if(profile!=null){
      
      PERFIL.update({_id:profile._id},{$set:r});
      POSTS.insert(r);
      $("#Editar2").modal("hide");
    }
    else{

      PERFIL.insert(r);
      $("#Editar2").modal("hide");
    }
  }
});
Template.perfil.helpers({
   dataProfile(user_id){
    data = PERFIL.findOne({user:Accounts.user()._id});
    return data;
  }
});
Template.Perfil.helpers({
  DATOS(){
      return PERFIL.find({});
  }, 
  FOTOS(){
      return POSTS.find({});
  },   
  usuarios:function(){
      return Meteor.users.find();
    }
});
   
/*
Template.perfil.helpers({
  itemN(){
      var usuario = Accounts.users.findOne({_id:this._id});
      return usuario.username;
  },  
  usuarios:function(){
      return Meteor.users.find();
    }
});
Template.perfil.events({
  "click #btnUser":function(e){
    e.preventDefault();
    var us = Accounts.users.findOne({_id:this._id});
    console.log(us);
    CHAT.insert(us);
    
  }
});*/