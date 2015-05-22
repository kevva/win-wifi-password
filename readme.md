# win-wifi-password [![Build Status](https://travis-ci.org/kevva/win-wifi-password.svg?branch=master)](https://travis-ci.org/kevva/win-wifi-password)

> Get current wifi password on Windows


## Install

```
$ npm install --save win-wifi-password
```


## Usage

```js
var winWifiPassword = require('win-wifi-password');

winWifiPassword(function (err, password) {
	console.log(password);
	//=> 'johndoesecretpassword'
});
```


## API

### winWifiPassword([name], callback)

#### name

Type: `string`

Get the wifi password for a specified *known* network.

#### callback(err, password)

Type: `function`

The callback will return the password to the network.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
