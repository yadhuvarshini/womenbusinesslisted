import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';


import { hashPassword } from '../handler/passwordHash.js';

//for reister : the frontnd will send the name email password, which should be captured in the body of the request  and check if already exist 

export const register  = async(req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
if (!name || !email || !password) {
  return res.status(400).json({ message: "All fields are required" });
}
    const existing = await User.findOne({ email });
    if (existing){
        return res.status(400).json({ message: "User already exists" });
    }
    try{
        //calling the function to hash the password
        const EncryptedPassword = await hashPassword(password);
        const user = await User.create({name, email, password: EncryptedPassword});

        // generating session token sending it to the client
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '30d'});
        
        //sending the user and token to the client

        res.status(201).json({ 
            message: "User registered sucessfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }, 
            token 
        });
    } catch(err) {
        return res.status(400).json({
            message: "Server error",
            error : err.message
        });
    };
}

//for login check for the email , then password comparison 

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if (!user) return res.status(404).json({error: "user not found"})
        console.log(user)
        
        const match = await bcrypt.compare(password, user.password)
        const token = jwt.sign( {id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
        res.json({ token, user });
    } catch(err) {
        res.status(500).json({ error: err.message})
    }
}