import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// login user
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email})

        if (!user){
            return res.json({success:false,message:"User doesn't exist."})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Checking if the user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists." });
        }

        // Validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email." });
        }

        // Password validation
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long.",
            });
        }

        // Check for uppercase letter
        const uppercaseRegex = /[A-Z]/;
        if (!uppercaseRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message: "Password must contain at least one uppercase letter.",
            });
        }

        // Check for special character
        const specialCharRegex = /[!@#$%^&*]/;
        if (!specialCharRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message: "Password must contain at least one special character.",
            });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}


export {loginUser,registerUser}