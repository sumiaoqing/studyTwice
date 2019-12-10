const http = require('http')
const WebSocketServer = require('websocket').server

const httpServer = http.createServer((request, response) => {
    console.log('[' + new Date + '] Received request for ' + request.url)
    response.writeHead(404)
    response.end()
})

const wsServer = new WebSocketServer({
    httpServer,
    autoAcceptConnections: true
})

wsServer.on('connect', connection => {
    connection.on('message', message => {
        console.log(message)
        if (message.type === 'utf8') {
            console.log('来自小程序的信息 ' + message.utf8Data)
            connection.sendUTF('[from server] ' + message.utf8Data)
        }
    }).on('close', (reasonCode, description) => {
        console.log('[' + new Date() + '] Peer ' + connection.remoteAddress + ' disconnected.')
    })
})

httpServer.listen(8080, () => {
    console.log('[' + new Date() + '] Serveris listening on port 8080')
})