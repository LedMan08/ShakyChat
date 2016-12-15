var UsChat = new ReactiveVar(false); 
Template.usuario.events({
    "click #UsButton":function(e){

        e.preventDefault();
        var logUsuario=Accounts.users.findOne({_id:this._id});
        //console.log(logUsuario.profile.username);
        

       // alert(logUsuario.profile.username);
        //alert(UsChat);
        UsChat.set(true);
    }

 });
controlTem = new ReactiveVar(false);
Template.principal.events({
    "click #perfil":function(e){
        e.preventDefault();
        controlTem.set(true);
        //var logUsuario=Accounts.users.findOne({_id:this._id});
       // alert('tu perfil');
    },
    "click #princi":function(e){
        e.preventDefault();
        //alert('tu pajina principal');
        controlTem.set(false);
    }
 });
Template.principal.helpers({
    showUs(){
        return UsChat.get();
    },
    usuA(){
        return Meteor.user().username;
    },
    control(){
        return controlTem.get();
    }
});
/*$(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('focus', '.panel-footer input.chat_input', function (e) {
    var $this = $(this);
    
    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeClass('panel-collapsed');
        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
/*$(document).on('click', '#new_chat', function (e) {
    var size = $( ".chat-window:last-child" ).css("margin-left");
    size_total = parseInt(size) + 400;
    alert(size_total);
    var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
    clone.css("margin-left", size_total);
});
$(document).on('click', '.icon_close', function (e) {
    //$(this).parent().parent().parent().parent().remove();
    $( "#chat_window_1" ).remove();
    UsChat.set(false);

});*/


