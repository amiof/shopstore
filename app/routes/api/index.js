const {homeController} = require("../../controllers/api/home.controller")
const { verifyRefreshToken } = require("../../middleware/refreshToken")
const { verifyAccessToken } = require("../../middleware/verifyAccessToken")

const router= require("express").Router()
/**
 * @swagger
 *  /:
 *   get:
 *       tags: ["user"]
 *       summary: root directory
 *       description: root director for check api is up or not
 *       parameters:
 *        - in : header
 *          name : accessToken
 *          description : header for Authorization
 *          example: bearer yourToken...
 *       responses: 
 *                        201:
 *                            description: success
 *                        400:
 *                            description : bad Request
 *                        401: 
 *                            description : unAuthorization
 *                        500: 
 *                            description : internal Error
 */
 
router.get("/",verifyRefreshToken, homeController.indexPage) 


module.exports={
    HomeRoutes: router
}