const router =require("express").Router();
const UserController = require("../controllers/userController");
const middlewareController = require("../controllers/middlewareController")




// UPDATE USER
router.put("/:id",UserController.updateUser)


// DELETE USER
router.delete("/:id", middlewareController.verifyTokenandAdminAuth,UserController.DeleteUser)


// GET USER FIND BY ID
 router.get("/:id",UserController.getUserFindById) 

//GET ALL USER 
router.get("/",middlewareController.verifyToken,UserController.getAllUsers)









module.exports= router;