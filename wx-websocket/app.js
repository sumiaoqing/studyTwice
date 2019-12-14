const http = require('http')
const WebSocketServer = require('websocket').server

const httpServer = http.createServer((request, response) => {
    // console.log('[' + new Date + '] Received request for ' + request.url)
    response.writeHead(404)
    response.end()
})

const wsServer = new WebSocketServer({
    httpServer,
    autoAcceptConnections: true
})

wsServer.on('connect', connection => {
    connection.on('message', message => {
        if (message.type === 'utf8'&&JSON.parse(message.utf8Data).data.code==101) {
            console.log('99999')
            connection.sendUTF( JSON.stringify({"msg":"开柜回馈","code":101,"success":0}))
 
            setTimeout(()=>
            {
                connection.sendUTF( JSON.stringify({"msg":"关柜回馈","code":102,"success":0,"getBook":[{},{}],"saveBook":[{},{}]}))
            },10000)

            setTimeout(()=>
            {
                connection.sendUTF( JSON.stringify( {"msg":"借还回馈","code":105,"amount":10,"data":{},"success":0}))
            },20000)


        }
    })
    // .on('close', (reasonCode, description) => {
    //     console.log('[' + new Date() + '] Peer ' + connection.remoteAddress + ' disconnected.')
    // })
})

httpServer.listen(8080, () => {
    console.log('[' + new Date() + '] Serveris listening on port 8080')
})