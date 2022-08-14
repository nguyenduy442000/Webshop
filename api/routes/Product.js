const productController = require("../controllers/productController");
const router = require("express").Router();


// ADD PRODUCT
router.post("/",productController.addProduct)


// GET PRODUCT
router.get("/find/:id",productController.getProductfindById)

// UPDATE PRODUCT
router.put("/:id",productController.updateProduct)

// DELETE PRODUCT
 router.delete("/:id",productController.deleteProduct)


// GET ALLPRODUCT
router.get("/",productController.getAllProduct)




module.exports = router;