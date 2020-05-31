var http = require('http')

var PORT = 8880

function handleRequest(req,res){
    res.end('Funcionando correctamente, Recurso pedido:'+req.url)
}

var Server = http.createServer(handleRequest)
server.listen(PORT, function () {
    console.log('Server is listening on port:'+PORT)
})