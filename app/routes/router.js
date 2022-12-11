const {categoryRoutes} = require("./admin/categoryRoutes")
const { HomeRoutes } = require("./api")
const { developerRoutes } = require("./developer/routesDevelopoer")
const { userAuthRoutes } = require("./users/auth.user")

const router=require("express").Router()


router.use("/", HomeRoutes)
router.use("/usr",userAuthRoutes)
router.use("/developer",developerRoutes)
router.use("/category",categoryRoutes)

module.exports={
    allRoutes: router
}