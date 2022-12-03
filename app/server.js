const express= require("express")
const app = express()
const createError=require("http-errors")
const path = require("path")
const http = require ("http")
const { default: mongoose } = require("mongoose")
const { allRoutes } = require("./routes/router")
const morgan = require("morgan")

module.exports=class application {

    constructor(PORT,URL_DB){
        this.configApplication()
        this.connectMongoDB(URL_DB)
        this.createServer(PORT)
        this.createRoutes()
        this.errorHandler()
    }
    configApplication(){
    app.use(morgan("dev"))
    app.use(express.json())
    app.use(express. urlencoded({extended: true}))
    app.use(express.static(path.join(__dirname,"..","public")))
    }
    connectMongoDB(URL_DB){
        mongoose.connect(URL_DB,(error)=>{
            if(!error) return console.log("connected to db")
           return   console.log(error)
        })
        mongoose.connection.on("connected",()=>{
            console.log("mongoose connected to db")
        })
        process.on("SIGINT",async()=>{
            await mongoose.connection.close()
            process.exit(0)
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
            next(createError.NotFound("صفحه ی مورد نظر یافت نشد"))
        })
        app.use((error,req, res, next)=>{
            const serverError=createError.InternalServerError
            const statusCode=error.status|| serverError.status
            const message=error.message || serverError.message
            return res.status(statusCode).json({
                data: null,
                 error:{
                    statusCode,
                    message
                 }
            })
        })
    } 

}
