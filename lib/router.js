import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout} from "meteor/kadira:blaze-layout";


FlowRouter.route("/", {
	name: "inicio",
	action(){
		BlazeLayout.render("inicio",{content:"logueo"});
	}	
});
FlowRouter.route("/principal", {
	name: "principal",
	action(){
		
		BlazeLayout.render("inicio",{content:"principal"});
	}	
});