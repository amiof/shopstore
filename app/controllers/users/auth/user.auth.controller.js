const createHttpError = require("http-errors");
const { object, date } = require("joi");
const { userModel } = require("../../../models/user");
const { randomCode, singAccessToken } = require("../../../utils/functions");
const { authSchema, checkOtpSchema } = require("../../../validators/users/auth.user");
const { controller } = require("../../controller");

class userAuthController extends controller {
 async usrLogin(req, res, next) {
   
  try{
    const {mobile}=req.body
    const result=await authSchema.validateAsync(req.body)
    const randCode=randomCode(9999,1000)
    const user=this.userSave(mobile, randCode)
    if(!user) throw createHttpError.Unauthorized("یوزر وجود ندارد یا ایجاد یوزر با مشکل مواحه شده است")
    return res.status(200).json({
      status:200,
      message:"کد ورود برای شما با موفقیت ارسال شد",
      code: randCode,
      mobile

    })

  }catch(error){
    
    next(createHttpError.Unauthorized(error.message))
  }
}
async userSave(mobile, code){
  
  const usrCheck=await this.checkUser(mobile)
  if(usrCheck) {
 
   return(await this.updateUser(mobile,{otp:{
      
        code,
        expire:new Date().getTime()+2400,
        
      
    }}))
  }
  return await (userModel.create({mobile, otp:{
    code,
    expire: new Date().getTime()+24000,
   
  }} ))
}
async checkUser(mobile){
  const user= await userModel.findOne({mobile}) 
  
  return !!user
}
async updateUser(mobile,ObjectData={}){

 const updateResult= await userModel.updateOne({mobile}, {$set:ObjectData})
 
 return !!updateResult.modifiedCount
}
 async checkLoginCode(req,res,next){

      try {
        await checkOtpSchema.validateAsync(req.body)
        const {mobile , code}=req.body 
        const user=await userModel.findOne({mobile})
        if(!user) throw createHttpError.NotFound("کاربری یافت نشد")
        if(user.otp.code !=code ) throw createHttpError.Unauthorized("کد ارسال شده معتبر نمی باشد")
        if (+user?.otp?.expire < new Date().getTime()) createHttpError.Unauthorized(" کد منقضی شده است")
        const createToken=await singAccessToken({mobile},"1d")
        res.status(201).json({
         status:201,
         success: true,
         message:"شما با موفقیت لاگین کردید",
         mobile,
         code,
         signToken :createToken
        })
      } catch (error) {
        next(error)
      }
     
  
}
}

module.exports = {
  userAuthController: new userAuthController(),
};
