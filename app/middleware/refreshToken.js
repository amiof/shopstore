const createHttpError = require("http-errors");
const JWT = require("jsonwebtoken");
const { model } = require("mongoose");
const { userModel } = require("../models/user");
const { SECRET_KEY } = require("../utils/constant");
const { singAccessToken, verifyToken } = require("../utils/functions");

const verifyRefreshToken = (req, res, next) => {
    const accessToken=req.headers.accesstoken
    const refreshToken  = req.headers.refreshtoken;
    if(!verifyToken(accessToken)){
          const token = refreshToken.split(" ")[1] || [];
          if (!token) throw createHttpError.Unauthorized("رفرش توکن وجود ندارد");
          console.log("hi if")
          JWT.verify(token, SECRET_KEY, async (error, payload) => {
            if (error) throw next(createHttpError.Unauthorized(" مجددا وارد حساب کاربری خود شوید رفرش توکن منفضی شده است"));
            const mobile = payload.mobile;
            const user = await userModel.findOne({ mobile });
            if (user) {
              const newToken = singAccessToken({ mobile }, "1d");
      
              res.json({
                newAccessToken: newToken,
                refreshToken: token,
              })
            }
          });
        




    }
};
module.exports={
    verifyRefreshToken
}