import http from "http";
import superagent from "superagent";
import dogList from "./dog.js";
import { response } from "express";

const server = http.createServer();

server.on('request', (req, res)=>{
    var randomDogBread = Math.round(Math.random()*dogList.length);
    console.log(dogList[randomDogBread]);
    console.log(`https://dog.ceo/api/breed/${dogList[randomDogBread]}/images/random`);
    superagent.get(`https://dog.ceo/api/breed/${dogList[randomDogBread]}/images/random`).end((err, response)=>{
        if(err) return console.log("dog bread: not found");
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(`<div style="color: white; background-color: gray; display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    text-align: center; "><h1>${dogList[randomDogBread]}</h1><img src=${response.body.message} alt="Dog Image"/></div>`);
        res.end();
    })
})

server.listen(3000, ()=>console.log("Server is running on port 3000"));


