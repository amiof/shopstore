const createHttpError = require("http-errors");
const { authSchema } = require("../../../validators/users/auth.user");
const { controller } = require("../../controller");

class userAuthController extends controller {
 async usrLogin(req, res, next) {
   
  try{
    
    const result=await authSchema.validateAsync(req.body)
    return res.status(200).json({
      status:200,
      message: "ورود شما با موفقیت انجام شد"
    })

  }catch(error){
    
    next(createHttpError.Unauthorized(error.message))
  }
}
}

module.exports = {
  userAuthController: new userAuthController(),
};
