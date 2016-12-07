/*import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout} from "meteor/kadira:blaze-layout";
*/
FlowRouter.route("/", {
	name: "PagInicio",
	subscriptions:function(params, queryParams)
	{
		this.register("loadMsn",Meteor.subscribe("getMsn"));
		this.register("loadUsers",Meteor.subscribe("getUsers"));
		this.register("loadPublic",Meteor.subscribe("getPublic"));
		this.register("loadComent",Meteor.subscribe("getComent"));
	},
	action(){
		BlazeLayout.render("inicio");
	}	
});
