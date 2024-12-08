import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart =async (req,res)=> {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


// Remove items from user cart
const removeFromCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed from cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}

// Fetch user cart data
const getCart = async (req, res) => {
    try {
        if (!req.body.userId) {
            return res.status(400).json({ success: false, message: "Invalid input" });
        }

        let userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        res.json({ success: true, cartData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error fetching cart" });
    }
};

export { addToCart, removeFromCart, getCart };
