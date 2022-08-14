const Cart = require("../model/Cart")

const cartController={

    // ADD CART produc
    addCart: async (req,res)=>{
        try{
            const newCart = new Cart(req.body);
            const saveCart = await newCart.save();
            res.status(200).json(saveCart);
        }catch(err){
            res.status(500).json({message:err.message})
        }
    },
    // GET CART find by id
    getCartById: async (res,req)=>{
       try{
           const cart = await Cart.findById(req.params.id);
           res.status(200).json(cart);

       }catch(err){
           res.status(500).json({message:err.message});

       }
    },
    getAllCart: async (req,res)=>{
        try{
            const allcart = await Cart.find()
            res.status(200).json(allcart);
        }
        catch(err){
            res.status(500).json({message:err.message});

        }
    },
    // UPDATE CART
    updateCart: async(req,res)=>{
        try{
             const cart = await Cart.findById(req.params.id);
             await cart.updateOne({$set:req.body});
             res.status(200).json("Updated Successfully")
        }catch(err){
      res.status(500).json({message:err.message});
        }
    },

    //DELETE CART
    deleteCart: async(req,res)=>{
        try{
           await Cart.findByIdAndDelete(req.params.id);
           res.status(200).json("Deleted Successfully!")
        }
        catch(err){
      res.status(500).json({message:err.message});
        }
    }
  
     
}


module.exports = cartController;