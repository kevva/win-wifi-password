'use strict';
var test = require('ava');
var winWifiPassword = require('./');

test(function (t) {
	t.plan(1);

	if (process.env.CI) {
		t.assert(true);
		return;
	}

	winWifiPassword().then(function (password) {
		t.assert(password, password);
	});
});
