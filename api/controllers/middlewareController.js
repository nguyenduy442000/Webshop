const jwt = require("jsonwebtoken");



const middlewareController = {
    // verifyToken
    verifyToken: (req,res,next)=>{
        const token = req.headers.token;
        if(token){
            const accessToken = token.split(" ")[1];// lấy accessToken từ Bearer token "từ khoảng trống và lấy từ vị trí số 1 "
           
           //kiểm tra
            jwt.verify(accessToken,process.env.JWT_ACCESS_KEY,(err ,user)=>{
                if(err){
                    res.status(404).json("Token is not valid");
                }
                req.user = user;
                next(); // Nếu thỏa điều kiện được đi tiếp
            });
            
        }
        else{
          return  res.status(401).json("You're not authenticated");
        }
    },

    // cho phép người dùng xóa chính mình hoặc admin có thể xóa hết
    verifyTokenandAdminAuth : (req,res,next)=>{
        middlewareController.verifyToken(req,res,()=>{
            if(req.user.id == req.params.id || req.user.isAdmin){
                next();
            }
            else{
              return  res.status(403).json("You're not allowed to delete other")
            }
        })
    }
}
module.exports = middlewareController;