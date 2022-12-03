const { userAuthController} = require("../../controllers/users/auth/user.auth.controller");

const router = require("express").Router();
router.post("/login", userAuthController.usrLogin);

module.exports = {
  userAuthRoutes: router,
};
