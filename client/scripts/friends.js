var Friends = {
    
    //set toggle to be initially false
    toggleStatus: {
        // called: false,
        // restore: function(){
        //     if (Friends.toggleStatus.called === false){
        //         Friends.toggleStatus.called = true;}
        //     else {
        //             Friends.toggleStatus.called = false;
        //         } 
        //     }

        called: false,
        restore: function(){
            if ($('#chats').find('.username').trigger('click')){
                //check toggle status
                Friends.toggleStatus.called = true;
                //if toggle status is true
        }
    // function(){
    //     // if ($('#chats').find('.username').trigger('click')){
    //     if (this.toggled === false){
    //         this.toggled = true;
    //         return this.toggled;
    //     } else {
    //      this.toggled = false;
    //         return this.toggled;
    //     }
        //     return true;
        // } else {
        //     return false;            
        }
    //look in chats for user name and when username is clicked, toggle
    }
};
