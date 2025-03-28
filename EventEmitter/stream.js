import http from "http";
import fs from "fs"
import { error } from "console";

const server = http.createServer();


server.on("request", (req, res)=>{
    // // Solution 1
    // fs.readFile("./test.txt", (err, data)=>{
    //     if (err){
    //         console.log(err);
    //     }
    //     res.write(data);
    //     res.end();
    // })

    // // Solution 2
    // const readable = fs.createReadStream("./test.txt");
    // // var data = '';
    // readable.on('data', (chunk)=>{
    //     // data+=chunk.toString();
    //     res.write(chunk);

    // })
    // readable.on('error', (error)=>{
    //     console.log(error);
    // })
    // readable.on('end', ()=>{
    //     res.end();
    // })


    // Solution 3
    fs.createReadStream('./test.txt').pipe(res);
})


server.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})