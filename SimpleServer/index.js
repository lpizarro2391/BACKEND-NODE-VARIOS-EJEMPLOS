var http = require('http')

var PORT = 8880

function handleRequest(req,res){
    res.end('Funcionando correctamente, Recurso pedido:'+req.url)
}