module.exports = function(module) {
	require('./HomePageController.js')(module);
	require('./ContactPageController.js')(module);
	require('./BlogPageController.js')(module);
};