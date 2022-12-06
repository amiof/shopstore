const { userAuthController} = require("../../controllers/users/auth/user.auth.controller");

const router = require("express").Router();

/**
 *@swagger
 *  /usr/login:
 *     post:
 *        tags: ["user"]
 *        summary: login user in user panel white phone num 
 *        description : on time pass login
 *        parameters: 
 *        -   name: mobile
 *            description: fa-ir phone number
 *            in: formData
 *            required : true
 *            type: string
 *        responses:
 *                 201: 
 *                   description: Success
 *                 400:
 *                    description: Bad Request
 *                 401: 
 *                    description : Unauthorization
 *                 500: 
 *                     description: Internal Server Error
 */
router.post("/login", userAuthController.usrLogin);
/**
 * @swagger
 *   /usr/login/checkLoginCode:
 *      post:
 *            tags: ["user"]
 *            summary: login code check 
 *            description: check login code send to mobile number 
 *            parameters: 
 *            -  name : loginCode
 *               description : login Code send to user
 *               in: formData
 *               required: true
 *               type: string 
 *            responses: 
 *                        201:
 *                            description: success
 *                        400:
 *                            description : bad Request
 *                        401: 
 *                            description : unAuthorization
 *                        500: 
 *                            description : internal Error
 */
router.post("/login/checkLoginCode", userAuthController.checkLoginCode);

module.exports = {
  userAuthRoutes: router,
};
