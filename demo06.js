//接收参数
var http=require('http');
var url =require('url');
http.createServer(function(request,response){
		response.writeHead(200,{'content-Type':'text/plain'});

		//解析参数
		//var prams=url.parse(request.url,true).pathname;
		var prams=url.parse(request.url,true).query;

		response.write('name:'+prams.name+prams.age+'\n');
		response.end('hello');

}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/')