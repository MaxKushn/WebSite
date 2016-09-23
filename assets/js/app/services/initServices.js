module.exports = function (module) {
	require('./ContactServices')(module);
	require('./SignUpServices')(module);
	require('./SignInServices')(module);
}
