angular.module('dellUiSite').factory('messages',function($http) {

	var messages = {
		"version":"1.0.0",
		"copyHtmlNote":"To use any of the following code examples, click on the HTML dropdown to the right and select the sample you want. It will be copied to your clipboard. Then, paste the copied code into your text editor."
	};


	return messages;
});