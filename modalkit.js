/*
modalkit.js
David Fink
@darkroastcreate
david@darkroastcreative.co
http://darkroastcreative.co
*/

function deleteModal(evt) {
  $(evt.target).remove();
}

function showModal(data, templateSource) {

  // TODO: Implement timeout functionality

  if(!templateSource) {
    templateSource = defaultModal;
  }
  var template = Handlebars.compile(templateSource);
  var modal = template(data);
  $(modal).modal('show').on('hidden.bs.modal', function(evt) {
    deleteModal(evt);
  });

}
