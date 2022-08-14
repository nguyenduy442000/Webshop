const router = require("express").Router();
const authController = require("../controllers/authControllers")
const middlewareController = require("../controllers/middlewareController")

// Login
router.post("/login",authController.loginUser)

// Register

router.post("/",authController.Register)

//REFESH
router.post("/refresh",authController.requestRefreshToken)


// LOG OUT
router.post("/logout",middlewareController.verifyToken,authController.userLogout)

module.exports = router;