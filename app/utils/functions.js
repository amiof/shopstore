const createHttpError = require("http-errors")
const JWT=require("jsonwebtoken")
const { token } = require("morgan")
const { userModel } = require("../models/user")
const { SECRET_KEY } = require("./constant")
const { redisClient } = require("./init.redis")



function randomCode(max,min){
    return Math.floor((Math.random()*(max-min))+min)
}

 const singAccessToken=(payload,expireTime)=>{
   return jwtToken=JWT.sign(payload,SECRET_KEY,{expiresIn:expireTime})
   
}

function verifyToken(toke){
    const token =JWT.verify(toke,SECRET_KEY,function(error,payload){
        if(error) return false
         return  payload
    })
    return token
}

async function redisRefreshTokenGet(refreshToken){
    const tokenV= await verifyToken(refreshToken)
    if(tokenV){
        const user =await userModel.findOne({mobile:tokenV.mobile})
        const id= user._id.toString()
       const idred=  await redisClient.get(id)
       return idred
       
    }
}


const tokenGeneratorWhitRefreshToken=async(token,refreshToken)=>{
    const tokenValid=verifyToken(token)
    const refreshTokenValid=verifyToken(refreshToken)
    
    if(refreshTokenValid){
       
        if(!tokenValid){
            const user=await userModel.findOne({mobile:refreshTokenValid.mobile})
            const redisValue=await redisRefreshTokenGet(refreshToken)
            if(user && redisValue && redisValue==refreshToken){
                const newToken=singAccessToken({mobile:user.mobile},"1d")
                const json={token:newToken,refreshToken}
                
                return json
            }else if (redisValue!==refreshToken){
                return createHttpError.Unauthorized("مجددا وارد شوید")
            }
        }
        return "true"
    }
}

module.exports={
    randomCode,
    singAccessToken,
    verifyToken,
    tokenGeneratorWhitRefreshToken
}