var http=require('http');
   http.createServer(function(request,response){
		response.writeHead(200,{
		'content-Type':'text/plain'
		})
		response.write('hello world\n')
			response.end('end with')
   
   }).listen(8888);

   console.log('Server running at http://127.0.0.1:8888/')