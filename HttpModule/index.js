import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import queryString from "querystring";
// import bodyParser from "body-parser";


function send404(res){
    res.writeHead(404, {'content-type':'text/html'});
    res.write('Error 404: Response Not found');
    res.end();
}

const mimeLookup = {
    '.html': 'application/javascript',
    '.js': 'text/html'
}



http.createServer((req, res) => {
    // res.writeHead(200, {'content-type': 'text/html'});
    console.log(`method : ${req.method}`)
    if(req.method === 'GET'){
        let fileName;
        if(req.url==='/'){
            fileName = 'index.html'
        }else{
            fileName = req.url;
        }
        console.log("fileName = "+ fileName);
    const _dirname = path.dirname(fileURLToPath(import.meta.url))
     const filePath = path.join(_dirname, fileName);
     console.log(filePath);

        if(!fs.existsSync(filePath)){
            send404(res);
            return;
        }
        
        fs.readFile(filePath, 'utf-8' ,(err, html)=>{
            if(err){
                console.log("Error was generated...");
            }
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(html);
        })
        
        
    }
    let body = '';
    if(req.method === 'POST'){
        console.log(`Url : ${req.url}`);
        req.on('data', async (chunk)=>{
            body += await chunk.toString();
            console.log(`body = ${body}`);
        })
        setTimeout(()=>{}, 3000);
        req.on('end', ()=>{
            body =  queryString.parse(body);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`<div><h1>your name is ${body.firstName} ${body.lastName}</h1></div>`)
            res.end();
        })


    }
    
}).listen(3000, "localhost", ()=>{
    console.log("Server is running on port 3000");
})


