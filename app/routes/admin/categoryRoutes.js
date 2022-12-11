const {categoriesController} = require("../../controllers/admin/categories.controller")

const router=require("express").Router()

router.get("/create-category",categoriesController.createCategory())
module.exports={
    categoryRoutes:router
}