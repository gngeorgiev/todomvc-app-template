(function (window) {
	'use strict';

	window.FiresyncObject = firesync.FiresyncObject;
	window.FiresyncArray = firesync.FiresyncArray;

	var firebase = new Firebase('https://firesync-todo.firebaseio.com/');

	var $newItemInput = document.querySelector('#new-item');
	var currentItem = new FiresyncObject(firebase.child('currentItem'))
		.bindTo($newItemInput, {
			localAttr: 'value'
		});

})(window);
