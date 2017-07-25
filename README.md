# ModalKit
ModalKit is an easy way to generate and display standardized modals on the fly.

## Features
### Currently Available
* Dynamic Modal Generation - Modals can be generated without having to include modal-specific markup.

### Coming Soon
* Template System - Predefine modal templates, and ModalKit will fill in the provided data in the template when called.
* Modal Time-out - Set modals up to dismiss themselves after a specified amount of time.

## Installation
To install ModalKit, download the release files or clone the repository within your project files.

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
### showModal(data)
showModal() displays a modal using a standard modal template, using the data passed through the function to populate fields in the modal.

#### data Parameter
The data parameter accepts JSON with the values to inject into a modal. The length and information provided is dependent on the fields to fill in the template. In the default template, the template requires a content for `title` and `body`.

#### Default Template Example
```
showModal({
	title: "Hello",
	body: "This is a sample modal created by ModalKit."
});
```
