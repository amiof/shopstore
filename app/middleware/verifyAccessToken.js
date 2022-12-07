const createHttpError = require("http-errors")
const JWT=require("jsonwebtoken")
const { userModel } = require("../models/user")
const { SECRET_KEY } = require("../utils/constant")

function verifyAccessToken(req,res,next){
const headers= req?.headers
   
    const token= headers?.accesstoken?.split(" ")[1] || []
    
    if(token){
        JWT.verify(token,SECRET_KEY,async (error, deCode)=>{
            if (error) {
                req.accessTokenExpired=true
                return next (createHttpError.Unauthorized("وارد حساب کاربری خود شوید"))}
            const {mobile}= deCode || {}
            
            const user= await userModel.findOne({mobile})
            if(!user) return next (createHttpError.Unauthorized("گاربری با این مشخصات وجود ندارد"))
            req.user=user
            
            return next()
        })      

    }
   else return next(createHttpError.Unauthorized("توکن در هدر موجود نمی باشد لطفا مجددا وارد حساب کاربری خود شوید"))
    
}
module.exports={
    verifyAccessToken
}