const { HomeRoutes } = require("./api")
const { userAuthRoutes } = require("./users/auth.user")

const router=require("express").Router()


router.use("/",HomeRoutes)
router.use("/usr",userAuthRoutes)


module.exports={
    allRoutes: router
}