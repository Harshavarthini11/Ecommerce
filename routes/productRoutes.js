const express=require('express')
const productController=require('../controller/productController')
const Router=express.Router()
const auth=require("../middlewares/auth");
Router.get("/products",auth,productController.getAllProduct)
Router.post("/postproduct",productController.sendp)
Router.put("/updateproduct",productController.updatec)
Router.delete("/deleteproduct",productController.deletecode)
module.exports=Router;