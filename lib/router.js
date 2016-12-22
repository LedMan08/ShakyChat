/*import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout} from "meteor/kadira:blaze-layout";
*/
import { Busqueda } from "../lib/collections/collections";
FlowRouter.route("/", {
	name: "PagInicio",
	subscriptions:function(params, queryParams)
	{
		this.register("loadPerfil",Meteor.subscribe("getPerfil",Meteor.userId()));
		this.register("loadLikes",Meteor.subscribe("getLikes",Meteor.userId()));
		this.register("loadMsn",Meteor.subscribe("getMsn",Meteor.userId()));
		this.register("loadUsers",Meteor.subscribe("getUsers",Meteor.userId()));
		this.register("loadPublic",Meteor.subscribe("getPublic",Meteor.userId()));
		this.register("loadComent",Meteor.subscribe("getComent",Meteor.userId()));
		this.register("loadMessages",Meteor.subscribe("getMessages",Meteor.userId()));
		this.register("loadChat",Meteor.subscribe("getChat",Meteor.userId()));
		
	},
	action(){
		BlazeLayout.render("inicio");
	}
});
