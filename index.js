'use strict';
var execFile = require('child_process').execFile;
var pify = require('pify');
var Promise = require('pinkie-promise');
var wifiName = require('wifi-name');

function getPassword(ssid) {
	var cmd = 'netsh';
	var args = ['wlan', 'show', 'profile', 'name=' + ssid, 'key=clear'];
	var ret;

	return pify(execFile, Promise)(cmd, args).then(function (stdout) {
		ret = /^\s*Key Content\s*: (.+)\s*$/gm.exec(stdout);
		ret = ret && ret.length ? ret[1] : null;

		if (!ret) {
			return Promise.reject('Could not get password');
		}

		return ret;
	});
}

module.exports = function (ssid) {
	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	if (ssid) {
		return getPassword(ssid);
	}

	return pify(wifiName, Promise)().then(function (name) {
		return getPassword(name);
	});
};
