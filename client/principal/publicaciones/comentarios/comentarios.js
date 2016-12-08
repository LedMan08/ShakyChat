Template.ComentsForm.helpers({
	listComents(){
		return COMENTS.find({articuloId:this._id});	
	} 
});
Template.ComentsForm.events({
	"click button" : function(e)
	{
		e.preventDefault();
		var dato=$(e.currentTarget).closest("form").serializeObject();
		dato.edit = false;
		COMENTS.insert(dato);
		$(".para-texto").val("");
	}
});
Template.itemComents.helpers({
  itemC(user){
    var usuario = Accounts.users.findOne({_id:user});
    return usuario.profile.username;
    console.log(this);
  }
});
Template.itemComents.events({
	"click #editComent" : function(e)
	{
		e.preventDefault();
		COMENTS.update({_id:this._id},{$set:{edit:true}});
	},
	"click #btnedit" : function(e){
		e.preventDefault();
		var r=$("#actualizar").serializeObject();
		_.extend(r,{edit:false});
		COMENTS.update({_id:this._id},{$set:{text:r.text,edit:r.edit}});
	},
	'click #deleteComent': function(e) {
    e.preventDefault();
    if (confirm("¿desea eliminar la publicacion?")) {
      var deleteComent = this._id;
      COMENTS.remove({_id:deleteComent});
    }
  }
});