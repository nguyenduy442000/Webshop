const router = require("express").Router();
const cartController = require("../controllers/cartController");

// ADD CART
router.post("/",cartController.addCart);

// GET CART
router.get("/:id",cartController.getCartById);

//UPDATE CART
router.put("/:id",cartController.updateCart);

//DELETE CART
router.delete("/:id",cartController.deleteCart)


//GET ALL CART

router.get("/",cartController.getAllCart)





module.exports = router;