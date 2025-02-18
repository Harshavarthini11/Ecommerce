// const { response } = require('express');
const { v4 : uuidv4}=require('uuid')
const ProductModel=require("../models/productModel")
const getAllProduct=async(req,res)=>{
try{
  
        const product=await ProductModel.find();
        res.send(product)
        
    }

catch(err){
console.error(err)
} 

}
// const sendp=async(req,res)=>{
//     const postproduct=req.body
//    try{
//     let data = await ProductModel.create(postproduct);
//     res.status(200).send({ message: "Success", data });
       
//    }
//    catch(err){
//     console.error(err)
//     res.status(400).send({ error: "Product creation failed", details: err.message });
//    }
// }
const sendp=async(req,res)=>{
    try{
        const {Id,Title,Description,Category,Price,Image,Rating}=req.body
        const product=new ProductModel({
            Id:uuidv4(),
            Title,
            Description,
            Category,
            Price,
            Rating,
        })
        await product.save()
        res.status(200).send({message:"product added succesfully",product})
    }
    catch(err){
        console.error(err)
        res.status(500).send({message:"failed"})
    }
}
const updatec=async(req,res)=>{
    try{
        //const {id}=req.params;
        updateproduct=req.body;
        const result=await ProductModel.findOneAndUpdate(updateproduct)
        if(result){
            res.status(200).send({message:"sucess",result})
        }
        else{
            res.status(404).send({message:"Product not found"})
        }

    }
    catch(err){
        console.error(err)
        res.status(500).send({message:"failed"})
    }
}
const deletecode=async(req,res)=>{
    const id=req.body;
   try{
    const result=await ProductModel.findOneAndDelete(id)
    if(result){
        res.status(200).send({message:"sucess",result})
    }
    else{
        res.status(404).send({message:"Product not found"})
    }
   }catch(err){
    console.error(err)
    res.status(500).send({message:"failed"})
   }
}

module.exports={getAllProduct,sendp,updatec,deletecode}