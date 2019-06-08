var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(data) {
    var arr = data.results;
    for(var msg of arr) {
      if (msg.hasOwnProperty('roomname')){
        RoomsView.renderRoom(msg);
      }
    }
  },

  //CHECK FOR XSS CHARACTERS HERE!!!
  renderRoom: function(msg) {
    //append message object's text property to DOM
    $("#rooms select").append("<span>" + msg.roomname + "</span>");
  }
};
