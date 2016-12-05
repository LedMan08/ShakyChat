/*import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout} from "meteor/kadira:blaze-layout";
*/

FlowRouter.route("/", {
	name: "PagInicio",
	subscriptions:function(params, queryParams)
	{
		this.register("loadMsn",Meteor.subscribe("getMsn"));
		this.register("loadUsers",Meteor.subscribe("getUsers"));
	},
	action(){
		BlazeLayout.render("inicio");
	}	
});/*
FlowRouter.route('/principal',{
	name:'principal',
	subscriptions:function(params, queryParams)
	{
		this.register("loadMsn",Meteor.subscribe("getMsn"));
		this.register("loadUsers",Meteor.subscribe("getUsers"));
	},
	action(){
		BlazeLayout.render('principal');
	}
});
/*FlowRouter.route("/chat",{
	name:"chat",
	subscription:function(params, queryParams){
		this.register("loadchat",Meteor.subcribe("getMsn"));
		this.register("loadUsers",Meteor.subcribe("getUsers"));
	}
})
FlowRouter.route("/principal", {
	name: "principal",
	action(){	
		BlazeLayout.render("inicio",{content:"principal"});
	}	
});
*/