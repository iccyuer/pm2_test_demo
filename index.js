var http=require('http');

var server=http.createServer(function(request,response){
    response.writeHeader(200,{
        "Content-type":"text/html;charset=utf-8"
    });
    response.write('<i>我是一个i标签aaa</i>');
    response.write('吼吼吼');
    response.end('hehehehe');
});
console.log('test_demo start!')
server.listen(4000,'127.0.0.1');