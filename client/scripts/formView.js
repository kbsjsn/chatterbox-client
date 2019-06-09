var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault(); 

    var newText = $('input#message[name=message]').val();
    var newUserText = window.location.search.slice(10);
    var newRoom = $('select').val();
    
        // this.renderMessage({
    //   username: 'Mel Brooks',
    //   text: 'I didn\'t get a harumph outa that guy.!',
    //   roomname: 'lobby'
    // });

    var createMessage = {
      username: newUserText,
      text: newText,
      roomname: newRoom,
    }
    //maybe in a string format
    Parse.create(createMessage);
    
    console.log('click!', createMessage);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};