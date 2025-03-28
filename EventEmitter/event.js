import eventEmitter from "events";

var emitter = new eventEmitter();

emitter.on("Sales", ()=>{
    console.log("There are some sales happening.");
})

emitter.on("Sales", ()=>{
    console.log("Do you want Wipro Stocks.");
})

emitter.on("Sales", (stocks)=>{
    console.log(`You can have ${stocks} of wipro.`);
})

emitter.emit("Sales", 10);