const http = require('http')
const url  = require('url')

const server = http.createServer( function (req, res) {
const path = url.parse(req.url)

  switch(path.pathname) {
      case '/hello' :
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
        res.end('你好')
          break
      case '/name'  :
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
        res.end('陳佳駿')
          break
      case '/id'    :
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
        res.end('110510530')
          break
      default       :
        res.writeHead(404, {'Content-Type' : 'text/plain'})
        res.end()
          break

  }  
  })

server.listen(3000)

console.log('Server running at http://localhost:3000')