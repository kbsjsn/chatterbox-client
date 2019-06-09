var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  countRoom: 0,

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

  renderRoom: function(message) {
    if (message.roomname != null || message.roomname != undefined){

      var copyMessageRoom = JSON.stringify(message.roomname);
      // var copyMessageRoom = typeof message === 'string' ? message : JSON.stringify(message.roomname);

      //check and see if message room is in roomsArr

      //if not add
      if(!copyMessageRoom.includes('script') && !Rooms.uniqueRooms.includes(copyMessageRoom)) {
        
        // //if Room is clicked
        // $("").on('click', function(){
          //as we go through all messages, dispaly messages with only that specific room

        // })
        //only show chat messages with that specific room
        $("#rooms select").append("<option value=" + message.roomname + " class=" + message.roomname + ">" + 
          message.roomname.replace(/['"]+/g, '') + "</option>");
        // $("#rooms select").append("<span>" + message.roomname.replace(/['"]+/g, '') + "</span>");
        // $("value")
        $("value").append("<option value=" + RoomsView.countRoom + " class=" + message.roomname + ">" + 
          message.roomname.replace(/['"]+/g, '') + "</option>");
        RoomsView.countRoom++;
        Rooms.uniqueRooms.push(copyMessageRoom);
      }
      console.log("THIS IS typeof message...", RoomsView.countRoom);
    }

    //append message object's text property to DOM
    // $("#rooms select").append("<span>" + msg.roomname + "</span>");
  }
};
