var http=require('http');

var server=http.createServer(function(request,response){
  response.write('<i>我是一个i标签aaa</i>');
  response.write('吼吼吼');
  response.end('hehehehe');
});
  //listen(port,ip) --ip必须在本机真实存在
server.listen(4000,'127.0.0.1');