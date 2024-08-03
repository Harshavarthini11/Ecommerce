const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
Id:{type:String},
Title:{type:String},
Description:{type:String,required:true},
Category:{type:String,required:true},
Price:{type:Number},
Image:{type:String},
Rating:{rate:Number,count:Number}
})
const product =mongoose.model("products",productSchema)
module.exports=product;