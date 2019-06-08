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
      if (msg.hasOwnProperty('text')){
        MessagesView.renderMessage(msg);
      }
    }
  },

  renderMessage: function(message) {
    if ((message.username != null || message.username != undefined) && 
        (message.text != null || message.text != undefined)){
      var copyMessageUser = JSON.stringify(message.username);
          //run a for loop to clean out < > chars
      // var newMessageUser = '';
      // for (var i = 0; i < copyMessageUser.length; i++){
      //   if (copyMessageUser[i] !== '<'){
      //     newMessageUser+=copyMessageUser[i];
      //   }    
      // }
      var copyMessage = JSON.stringify(message.text);
      //run a for loop to clean out < > chars
      // var newMessage = '';
      // for (var i = 0; i < copyMessage.length; i++){
      //   if (copyMessage[i] !== '<'){
      //     newMessage+=copyMessage[i];
      //   }
      // }    
      
      //append message object's text property to DOM, JSON.stringify(message.username)
      if(!copyMessage.includes('script') && !copyMessageUser.includes('script')) {
        this.$chats.append("<div class = chat><div class = username>" + copyMessageUser.replace(/['"]+/g, '') + "</div>" 
          + copyMessage.replace(/['"]+/g, '') + "</div>");
      }
    }




    //so we have data.results array 

    //we will go through each object in array

    //we will check if there is any text


    //if there is text we will render our message
  }

};