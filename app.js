const express=require('express')
const app=express();
const ProductRouter=require('./routes/productRoutes')
const UserRouter=require('./routes/userRoutes')
const CartRouter=require('./routes/cartRoutes')
const OrderRouter=require('./routes/orderRoutes')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser = require('body-parser');


app.use(cors());
mongoose.connect('mongodb+srv://harsha07:KSGeeU1jMDje4nri@cluster0.zty6gdn.mongodb.net/ecommerce'
).then(()=>{
    console.log("mongodb connected")
})
app.use(bodyParser.json());
app.use(express.json())
app.set("view engine","ejs");
app.use('/',ProductRouter);
app.use('/User', UserRouter);
app.use('/',CartRouter);
app.use('/',OrderRouter);

app.listen(8000,()=>{
    console.log("server is running on the port 8000")
})