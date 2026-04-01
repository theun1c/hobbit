import 'dotenv/config'
import http from 'http'

const PORT = Number(process.env.PORT) || 5000

const server = http.createServer((req, res) => {
    res.writeHead( 200, {
        'Content-type': 'text/html; charset=UTF-8' 
    })

    if(req.url === '/health'){
        return HealthHandler(req, res)
    }

    if(req.url === '/habits'){
        return HabitHandler(req, res)
    }

    res.end('/')
});

server.listen(PORT, () => {
    console.log(`start on port: ${PORT}`)
})

function HealthHandler(req:http.IncomingMessage , res: http.ServerResponse<http.IncomingMessage>) {
    
    res.writeHead( 200, {
        'Content-type': 'text/html; charset=UTF-8' 
    })

    if (req.method === "GET"){
        return res.end('HEALTH PAGE --- GET')
    }

    if (req.method === "POST"){
        return res.end('HEALTH PAGE --- POST')
    }
}

function HabitHandler(req:http.IncomingMessage , res: http.ServerResponse<http.IncomingMessage>) {
    
    res.writeHead( 200, {
        'Content-type': 'text/html; charset=UTF-8' 
    })

    if (req.method === "GET"){
        return res.end('HABIT PAGE --- GET')
    }

    if (req.method === "POST"){
        return res.end('HABIT PAGE --- POST')
    }
}