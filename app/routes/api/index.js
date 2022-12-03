const {homeController} = require("../../controllers/api/home.controller")

const router= require("express").Router()

router.get("/",homeController.indexPage) 


module.exports={
    HomeRoutes: router
}