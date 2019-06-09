var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // this.renderMessage({
    //   username: 'Mel Brooks',
    //   text: 'I didn\'t get a harumph outa that guy.!',
    //   roomname: 'lobby'
    // });

  },

  render: function(data) {
    var arr = data.results;
    for(var msg of arr) {
  
        //
        // $('option').click(function(){
        //   console.log('yes ' + $('option').attr('class'))
        //   if ($('option').attr('class') === msg.roomname){
        //     console.log('blah')
            MessagesView.renderMessage(msg);  
          }
      
        // MessagesView.renderMessage(msg);
    //   }
    // }
  },

  renderMessage: function(message) {
    if ((message.username != null || message.username != undefined) && 
        (message.text != null || message.text != undefined)){
      var copyMessageUser = JSON.stringify(message.username);
      ///put roomname inside of div class id
      var copyRoomname = JSON.stringify(message.roomname);
      var copyMessage = JSON.stringify(message.text);
      
      
      //append message object's text property to DOM, JSON.stringify(message.username)
      if(!copyMessage.includes('script') && !copyMessageUser.includes('script') 
        && copyMessage.length != null && copyMessageUser.length != null) {
        // this.$chats.append("<div class = chat><div class = username>" + copyMessageUser.replace(/['"]+/g, '') + "</div>" 
        //   + copyMessage.replace(/['"]+/g, '') + "</div>");

        ///put div class inside roomname
          this.$chats.append("<div class = chat " + copyRoomname + "><div class = username>" + copyMessageUser.replace(/['"]+/g, '') + "</div>" 
          + copyMessage.replace(/['"]+/g, '') + "</div>");
      }
      // console.log("THIS IS copyMessage.length...", copyMessage.length);

    }

    //so we have data.results array 

    //we will go through each object in array

    //we will check if there is any text


    //if there is text we will render our message
  }

};