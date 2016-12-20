Template.Perfil.helpers({
    prefilus(){
      return{
        email:Meteor.user().emails[0].address,
        usuario: Meteor.user().username
      }
    },
    amig(){
      return Meteor.users.find({});
    }
});
var con=ReactiveVar(true);
var contador=0;
URL=new ReactiveVar("");
Uploader.finished=function(index, fileInfo, templateContex){
  URL.set(fileInfo.url);
  //console.log(fileInfo);
};
Template.Perfil.helpers({
  DATOS(){
    return POSTS.find({user:Meteor.user()._id}, {sort: [ ["date", "desc"] ] });
  },
  URL(){
    return URL.get();
  },
  FPerfil(){
    //alert(POSTS.findOne({user:Meteor.user()._id}, {sort: [ ["date", "desc"] ] }));
      
    return POSTS.find({user:Meteor.user()._id}, {sort: [ ["date", "desc"] ] });
  },
  
});
Template.fotoperfil.events({
  "click #btnsend":function(e){
    e.preventDefault();

    var r=$("#formpublic").serializeObject();
    if(r.text||r.images){
      POSTS.insert(r);
      $("#input").val("");
      $("#formulario li").find("img").attr("src","");
      $('.done').click();
      $('[name="images"]').val("");
    }
    else
    {
      alert("Debes introducir un estado o una imagen para poder PUBLICAR");
    }
    
    //console.log(r);*/
  }
});

//cambiar datos
Template.editardatos.helpers({
    prefi(){
      return{
        email:Meteor.user().emails[0].address,
        usuario: Meteor.user().username
      }
    },
   
});
/*
Template.editardatos.events({
  'click #editPer':function(e){
    e.preventDefault();
    event.preventDefault();
    var name=$('[name="uss"]').val();
    var fono=$('[name="tef"]').val();
    var ocupacion=$('[name="ocup"]').val();
    var ocupacion=$('[name="naci"]').val();
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
  }
});


*/

/*Template.principal.events({
  'click #perfil':function(e){
    e.preventDefault();
    alert(this.user);
  }

  DATOS(){
    alert(POSTS.userId);
    if(this.user==Meteor.user()._id){
      return (POSTS.find({}, {sort: [ ["date", "desc"] ] }));
    }
  },
  URL(){
    return URL.get();
  },
 });*/


/*

var fono = new ReactiveVar(false);
var  ocupacion= new ReactiveVar(false);
Template.Perfil.events({
  'click #fono':function(e){
    e.preventDefault();
    //alert("fono");
    fono.set(true);
  },
  'click #ocupacion':function(e){
    e.preventDefault();
    console.log(this);
    //console.log(this);
    ocupacion.set(true);
  }
});
Template.Perfil.helpers({
  showfono(){
    return fono.get();
  },
  showocup(){
    return ocupacion.get();
  }
});
Template.Fono.events({
  'submit #formFono':function(e){
    e.preventDefault();
    var editar=e.target.fono.value;
   // alert(PERFIL.findOne({}).);
    PERFIL.insert({fono:editar,estado:"none"});        
  }
});
Template.Ocupacion.events({
  'submit #formOcup':function(e){
    e.preventDefault();
    var editar=e.target.ocupacion.value;
    PERFIL.insert({estado:editar});        
  }
});
Template.Perfil.helpers({
  conect(){
    return FlowRouter.subsReady('loadPerfil');
  },
  complet(){
    if(PERFIL.find().user){
      alert(PERFIL.find().user);
      completadouser.set(true);
    }
    alert(PERFIL.find().user);
    alert(completadouser);
    return completadouser.get();

  }
});*/