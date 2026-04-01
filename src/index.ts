import 'dotenv/config'
import http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead( 200, {
        'Content-type': 'text/html; charset=UTF-8' 
    })

    if(req.url === '/health'){
        return res.end('HEALTH PAGE')
    }

    if(req.url === '/habits'){
        return res.end('HABITS PAGE')
    }

    res.end('/')
});

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`start on port: ${PORT}`)
})