'use strict';

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require('http');


var server = http.createServer(function (request, response) {
    response.writeHeader(200, {
        "Content-type": "text/html;charset=utf-8"
    });
    response.write('<i>我是一个i标签aaa</i>');
    response.write('吼吼吼');
    response.write(_user2.default.text);
    response.end('hehehehe');
});
console.log('test_demo start!');
server.listen(4000, '127.0.0.1');