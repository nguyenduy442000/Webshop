const User =require("../model/User");
const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")

let refreshTokens = [];
const authController = {
    
    //add User
    Register: async (req,res)=>{
        try{
            // hash password
            const salt =await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password,salt);
            
            // create
          const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashed,
            age:req.body.age,
            fullname:req.body.fullname,
            img:req.body.img
          });

          // Save to DB
          const saveUser =await newUser.save();
          res.status(200).json(saveUser);
          
         
        }catch(err){
         res.status(500).json(err.msg);
        }
    },

    // generate access token
    generateAccessToken : (user)=>{
      return jwt.sign(// thông tin đính kèm khi gửi jsonwebtoken
        {
          id: user.id,
          admin:user.admin
        },
        process.env.JWT_ACCESS_KEY,// Mã bí mật 
        {expiresIn:"60s"}// Thời gian token này tồn tại
      )
    },
  // token lưu trữ 
    generateRefeshToken: (user)=>{
        return jwt.sign({
          id:user.id,
          admin:user.isAdmin
        },
        process.env.JWT_REFRESH_KEY,
        {
          expiresIn:"365d"
        }
        )
    },
  

    //LOGIN
   loginUser: async (req,res)=>{
    try{
      const user = await User.findOne({username:req.body.username}); // tìm user nào có username trùng với username được nhập từ client để so sánh

      if(!user){
       return res.status(404).json("Wrong username!");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      ) // để so sánh password user đã nhập và password trên data bằng bcrypt
        if(!validPassword){
          return  res.status(404).json("wrong password");

        }
        if(user && validPassword){
          const accessToken = authController.generateAccessToken(user);
          const refreshToken= authController.generateRefeshToken(user);
          refreshTokens.push(refreshToken)
          res.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            secure:false,
            path:"/",
            sameSite:"strict"
          })
          const {password, ...others}= user._doc; // trả về thông tin nhưng loại trừ password
          res.status(200).json({...others,accessToken})
        }
    }catch(err){
      res.status(500).json(err)
    }

   },

   requestRefreshToken : async(req,res)=>{
    //take refresh token from user
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken)
    return res.status(401).json("you're not authenticated");
    if(!refreshToken.includes(refreshToken)){
      return res.status(403).json("refresh token is no valid")
    }
    jwt.verify(refreshToken,process.env.JWT_REFRESH_KEY,(err,user)=>{
        if(err){
          console.log(err)
        }
        //Create new accesstoken , refresh token
        const newAccessToken = authController.generateAccessToken(user);
        const newRefreshToken = authController.generateRefeshToken(user);
        refreshToken.push(newRefreshToken);
        res.cookie("refreshToken",newRefreshToken,{
          httpOnly:true,
          secure:false,
          path:"/",
          sameSite:"strict"
        });
        res.status(200).json({accessToken:newAccessToken})

    })
   },

   //LOG OUT 
   userLogout : async(req,res)=>{
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
    res.status(200).json("Logged out!")
   }

}
module.exports = authController;