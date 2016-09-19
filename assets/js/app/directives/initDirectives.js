module.exports = function (module) {
	require('./websiteBehaviour.js')(module);
	require('./emailValidation.js')(module);
	require('./nameValidation.js')(module);
}
