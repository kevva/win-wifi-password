# win-wifi-password [![Build Status](https://travis-ci.org/kevva/win-wifi-password.svg?branch=master)](https://travis-ci.org/kevva/win-wifi-password)

> Get current wifi password on Windows


## Install

```
$ npm install --save win-wifi-password
```


## Usage

```js
const winWifiPassword = require('win-wifi-password');

winWifiPassword().then(password => {
	console.log(password);
	//=> 'johndoesecretpassword'
});
```


## API

### winWifiPassword([name])

Returns a promise that resolves to a string containing the password.

#### name

Type: `string`

Get the wifi password for a specified *known* network.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
