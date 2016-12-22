URL=new ReactiveVar("");
Uploader.finished=function(index, fileInfo, templateContex){
  URL.set(fileInfo.url);
  //console.log(fileInfo);
};
Template.publicacion.helpers({
  DATOS:POSTS.find({}, {sort: [ ["date", "desc"] ] }),
  URL(){
    return URL.get();
  },
 });

Template.publicacion.events({
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
//Codigo like dislike
Template.item.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});
Template.item.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  itemName(user){
    var usuario = Accounts.users.findOne({_id:user});
    return usuario.username;
  }
});
// 
//var mylikes = new ReactiveVar(true)
Template.item.events({
  'click #like':function(e){
    e.preventDefault();
    Meteor.call("addlike",this._id,function(error,result){
      if(result){
        alert("like");   
        document.getElementById("like").disabled = true;
        document.getElementById("like").style.color = " #F0F8FF";
        document.getElementById("nolike").style.color = " blue";
        document.getElementById("nolike").disabled = false;
      }
    });
  },
  'click #nolike':function(e){
    e.preventDefault();
   var a=this._id;
    
    Meteor.call("removelike",this._id,function(error,result){
      if(result){
         document.getElementById("like").disabled = false;
          document.getElementById("nolike").style.color = " #F0F8FF";
          document.getElementById("like").style.color = " blue";
          document.getElementById("nolike").disabled = true;
          alert("no te gusta");   
       }
    });
  }
});
/*Template.item.events({
  "mylikes":function(){ 
      return get.mylikes;
    }
});*/
//
Template.item.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.discounter = new ReactiveVar(0);
});
Template.item.helpers({
  discounter() {
    return Template.instance().discounter.get();
  },
});
Template.item.events({
  'click #dislike'(event, instance) {
    // increment the counter when button is clicked
    instance.discounter.set(instance.discounter.get() + 1);
  },
});
Template.publicacion.helpers({
  autor:function(){
    if(Accounts.user().name!=undefined)
    {
      return Accounts.user().username;
    }else{
      return Accounts.user().username;
    }
  }
});
//--->nombre a las publicaciones
Template.item.helpers({
  texto:function(){
    if(Accounts.user().name!=undefined)
    {
      return Accounts.user().username;
    }else{
      return Accounts.user().username;
    }
  }
});
Template.item.helpers({
  fullname:function(){
    if(Accounts.user().username==undefined)
    {
      return "jeje";
    }else{
      
      return Accounts.user().username;
    }
  }
});
Template.item.events({
  "click #coment":function(e){
    e.preventDefault();
  },
  'click #removePublicacion': function(e) {
    e.preventDefault();
    //console.log(this.user);
    //console.log(Meteor.user()._id);
    if (this.user==Meteor.user()._id){
      
      if (confirm("¿desea eliminar la publicacion?")) {
        var deletePublic = this._id;
        POSTS.remove({_id:deletePublic});
      }
    }
    else{
      alert("Usted no puede Eliminaar esta publicaion");
    }
  }
});
Template.publicacion.helpers({
  dateER:function(sDate){
    return sDate.toLocaleDateString()+' '+sDate.toLocaleTimeString();
  }
});
