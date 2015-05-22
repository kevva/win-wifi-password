'use strict';
var execFile = require('child_process').execFile;
var wifiName = require('wifi-name');

function getPassword(ssid, cb) {
	var cmd = 'netsh';
	var args = ['wlan', 'show', 'profile', 'name=' + ssid, 'key=clear'];
	var ret;

	execFile(cmd, args, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		ret = /^\s*Key Content\s*: (.+)\s*$/gm.exec(stdout);
		ret = ret && ret.length ? ret[1] : null;

		if (!ret) {
			cb(new Error('Could not get password'));
			return;
		}

		cb(null, ret);
	});
}

module.exports = function (ssid, cb) {
	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	if (ssid && typeof ssid !== 'function') {
		getPassword(ssid, cb);
		return;
	} else if (ssid && !cb) {
		cb = ssid;
	}

	wifiName(function (err, name) {
		if (err) {
			cb(err);
			return;
		}

		getPassword(name, cb);
	});
};
