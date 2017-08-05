/*
modalkit.js
David Fink
@darkroastcreate
david@darkroastcreative.co
http://darkroastcreative.co
*/

function deleteModal(evt) {

  // Remove the event's target from the DOM
  $(evt.target).remove();

}

function showModal(data, templateSource, timeout) {

  // Determine if a template is specified, and compile the template with the provided data
  if (!templateSource) {
    templateSource = defaultModal;
  }
  var template = Handlebars.compile(templateSource);
  var modal = template(data);

  // Show the modal, and add events to account for when the modal is dismissed or times out
  $(modal).modal("show").on("hidden.bs.modal", function(evt) {
    deleteModal(evt);
  }).on("shown.bs.modal", function(evt) {
    if (timeout && timeout > 0) {
      // Create an object to emulate a JS event to allow use of deleteModal function
      var emulatedEvent = {};
      emulatedEvent.target = modal;

      // Create a timer to count down timeout time and take action on timer expiration
      var timer = setInterval(function() {
        $(".modal.in").first().modal("hide");
        clearInterval(timer);
      }, timeout);
    }
  });

}
