const Product = require("../model/Product");

const productController = {
    // add product 
    addProduct: async (req,res)=>{
      
      try{
        const newProduct = new Product(req.body); 
         const saveProduct = await newProduct.save();
         res.status(200).json(saveProduct);
      }catch(err){
        res.status(500).json(err);
      }
    },

    //get product find by id 
    getProductfindById: async(req,res)=>{
       try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
       }catch(err){
        res.status(500).json({message:err.message})
       }
    },

    // get all product
    getAllProduct: async  (req,res)=>{
      try{
        const allproduct = await Product.find()
        res.status(200).json(allproduct);

      }
      catch(err){
        res.status(500).json({message:err.message});
      }
    },
    // update product 
    updateProduct: async (req,res)=>{

      try {
        const product = await Product.findById(req.params.id);
        await product.updateOne({$set:req.body});
        res.status(200).json("Updated Successfully!");


      }catch(err){
        res.status(500).json({message:err.message})
      }
    },

    // delete product
    deleteProduct: async(req,res)=>{
      try{
         await Product.findByIdAndDelete(req.params.id);
         res.status(200).json("Deleted Successfully!");
        
       
        
      }catch(err){
        res.status(500).json({message:err.message})
      }
    }     
    
    
};

module.exports= productController;