import eventEmitter from "events";
import http from "http";

const server = http.createServer();
server.on("request", (req, res)=>{
    console.log("Request is received.");
    console.log(`URL: ${req.url}`);
    res.end("Request is received.");
})

server.listen(3000, ()=>{console.log("Server is Listening on port 3000")});