import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler=async (req,res)=>{
    if(req.method=='POST'){
        for(let i=0;i<req.body.length();i++){
            let p=new Product({
                title:req.body[i].title,
                slug:req.body[i].slug,
                description:req.body[i].description,
                image:req.body[i].image,
                category:req.body[i].category,
                size:req.body[i].size,
                color:req.body[i].color,
                price:req.body[i].price,
                availableqty:req.body[i].availableqty,
            })
        }
        await p.save();
        res.status(200).json({success:"success"});
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }

    let products=await Product.find();
}


export default connectDb(handler);