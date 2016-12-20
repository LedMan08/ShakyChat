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
	},
});
Template.itemComents.helpers({
  itemC(user){
    var usuario = Accounts.users.findOne({_id:user});
    return usuario.username;
    console.log(this);
  }
});
Template.itemComents.events({
	"click #editComent" : function(e)
	{
		if (this.user==Meteor.user()._id){
			e.preventDefault();
			COMENTS.update({_id:this._id},{$set:{edit:true}});	
		}
		else{
			alert("Usted no puede editar este mensaje");
		}
		
	},
	"click #btnedit" : function(e){
		e.preventDefault();
		var r=$("#actualizar").serializeObject();
		_.extend(r,{edit:false});
		COMENTS.update({_id:this._id},{$set:{text:r.text,edit:r.edit}});
	},
	/*'click #deleteComent': function(event,template) {
    	// console.log(this._id);
    	//console.log(this.user);
    	
    	Meteor.call('coments.remove',this._id);
    }*/
	'click #deleteComent': function(e) {
    e.preventDefault();
    	if (this.user==Meteor.user()._id) {
    		//console.log(this.user);
    		//console.log(Meteor.user()._id);
    		if (confirm("¿desea eliminar la publicacion?")) {
	      		var deleteComent = this._id;
	      		COMENTS.remove({_id:deleteComent});
	    	}
		}
		else{
			alert("Usted no Puede Eliminar este mensaje");
		}
    }
	   
});