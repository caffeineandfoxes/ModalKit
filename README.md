# ModalKit
ModalKit is an easy way to generate and display standardized modals on the fly.

[![codebeat badge](https://codebeat.co/badges/e15f40b3-ab65-45cf-91ce-e77a0b2bc909)](https://codebeat.co/projects/github-com-darkroastcreative-modalkit-master) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/372addf7f08a4cb1b05cb50fdc153ce7)](https://www.codacy.com/app/david_46/ModalKit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=darkroastcreative/ModalKit&amp;utm_campaign=Badge_Grade)

[![Buy Me A Coffee](http://darkroastcreative.co/wp-content/uploads/2017/09/DRC_Buy-Me-A-Coffee_Button.png)](https://ko-fi.com/A1263BPJ)

Like ModalKit? [Buy me a coffee (or two, I’ll drink them both).](https://ko-fi.com/A1263BPJ)

## Features
### Currently Available
* Dynamic Modal Generation - Modals can be generated without having to include modal-specific markup.

### Coming Soon
* Template System - Predefine modal templates, and ModalKit will fill in the provided data in the template when called.
* Modal Time-out - Set modals up to dismiss themselves after a specified amount of time.

## Installation
To install ModalKit, download the release files or clone the repository within your project files, and link all dependencies, modal templates, and the ModalKit library in your document. **Please note that for the template system to work properly, you must link your template files first (see example below).**
### Example of File Linking with Two Modal Templates
```
...

<!-- ModalKit Templates -->
<script src="templates/default.modal"></script>
<script src="templates/advanced.modal"></script>

<!-- ModalKit Library -->
<script src="../modalkit.js"></script>

...
```

## Dependencies
* [Bootstrap](http://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [Handlebars.js](http://handlebarsjs.com/)

## Usage
To use ModalKit, associate JavaScript events with calls to `showModal()`, passing along data required by the modal template as specified in the function’s documentation.

#### Default Template Example - Show Modal on Document Ready
```
$(document).ready(function() {
  showModal({
    title: "Hello",
    body: "This is a sample modal created by ModalKit."
  });
});
```

## API/Functional Documentation
### showModal(data, [templateSource], [timeout])
showModal() displays a modal using a standard modal template, using the data passed through the function to populate fields in the modal, and the optional `templateSource` and `timeout` parameters to select the modal template and timeout time.

#### data Parameter
The `data` parameter accepts JSON with the values to inject into a modal. The length and information provided is dependent on the fields to fill in the template. In the default template, the template requires a content for `title` and `body`.
##### Default Template Example
```
showModal({
	title: "Hello",
	body: "This is a sample modal created by ModalKit."
});
```

#### templateSource Parameter (Optional)
The `templateSource` parameter is an optional parameter which is used to pass the source markup for a modal template. Though it is recommended to store this source as a variable and pass the variable through the `showModal()` call, it is also possible to pass a String with the markup inline. If no value is specified for this parameter, the default modal template will be used.

#### timeout Parameter (Optional)
The `timeout` parameter is an optional parameter used to specify a timeout time for a given modal, measured in milliseconds. This value is passed as an integer, and when the timeout time is reached, the modal will dismiss itself and be deleted from the DOM.

### deleteModal(evt)
deleteModal() deletes a modal from the DOM. The function accepts an event (as the `evt` parameter), which the function uses to determine the specific modal to target and remove.
