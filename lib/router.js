/*import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout} from "meteor/kadira:blaze-layout";
*/
import { Busqueda } from "../lib/collections/collections";
FlowRouter.route("/", {
	name: "PagInicio",
	subscriptions:function(params, queryParams)
	{
		this.register("loadMsn",Meteor.subscribe("getMsn"));
		this.register("loadUsers",Meteor.subscribe("getUsers"));
		this.register("loadPublic",Meteor.subscribe("getPublic"));
		this.register("loadComent",Meteor.subscribe("getComent"));
		this.register("loadPerfil",Meteor.subscribe("getPerfil",Meteor.userId()));
	},
	action(){
		BlazeLayout.render("inicio");
	}
});
