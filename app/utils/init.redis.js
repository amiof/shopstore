const redisDB = require("redis")

const redisClient=redisDB.createClient({url:"redis://localhost:6363"})
redisClient.connect()
redisClient.on("connect",()=>{
    console.log("connect to redis")
})
redisClient.on("error",(error)=>console.log("redis Erro ", error.message))
redisClient.on("connected",()=>console.log("connected to redis for use"))
redisClient.on("end",()=>console.log("disconnected redis"))
module.exports={
    redisClient
}