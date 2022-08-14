const User =require("../model/User");


const UserController = {
   

    //get all user
    getAllUsers: async (req,res)=>{
        try{
            const alluser = await User.find();
            res.status(200).json(alluser);
          
        }catch(err){
          res.status(500).json(err.msg);
        }
    },
   // get user find by id
   getUserFindById: async (req,res)=>{
    try{
          const user = await User.findById(req.params.id);
          res.status(200).json(user);
    }catch{
           res.status(500).json(err.msg);
    }
   },

   //UPADATE USER
   updateUser: async (req,res)=>{
       try{
          const updateUser = await User.findById(req.params.id);
          await updateUser.updateOne({$set:req.body})
          res.status(200).json("Updated Successfully");
       }catch(err){
          res.status(500).json({message:err.message});
       }
   },

   //DELETE USER 
   DeleteUser: async (req,res)=>{
    try{
         await User.findByIdAndDelete(req.params.id);
         res.status(200).json("Deleted Successfully!")
    }catch(err){
    res.status(500).json(err.msg);
    }
   }

   




}

module.exports = UserController;