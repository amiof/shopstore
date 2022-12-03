const express= require("express")
const app = express()

const path = require("path")
const http = require ("http")
const { default: mongoose } = require("mongoose")
const { allRoutes } = require("./routes/router")

module.exports=class application {

    constructor(PORT,URL_DB){
        this.configApplication()
        this.connectMongoDB(URL_DB)
        this.createServer(PORT)
        this.createRoutes()
        this.errorHandler()
    }
    configApplication(){
    app.use(express.json())
    app.use(express. urlencoded({extended: true}))
    app.use(express.static(path.join(__dirname,"..","public")))
    }
    connectMongoDB(URL_DB){
        mongoose.connect(URL_DB,(error)=>{
            if(!error) return console.log("connected to db")
           return   console.log(error)
        })
    }
    createServer(PORT){
       http.createServer(app).listen(PORT,(error)=>{
       if(!error) console.log(`server is listen in : http://localhost:${PORT}`)
       }) 
    }
    createRoutes(){
       app.use(allRoutes)
    }
    errorHandler(){
        app.use((req,res,next)=>{
            return res.json({
                statusCode: 404 ,
                success: false,
                message: "آدرس مورد نظر یافت نشد"
            })
        })
        app.use((error,req, res, next)=>{
            const statusCode=error.status|| 500
            const message=error.message || "internalError"
            return res.status(statusCode).json({
                status:statusCode,
                message
            })
        })
    } 

}
