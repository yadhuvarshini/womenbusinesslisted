import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';


import { hashPassword } from '../handler/passwordHash.js';

//for register : the frontnd will send the name email password, which should be captured in the body of the request  and check if already exist 
//form data , validate , check if user already exists, if not then create a new user and send the token to the client
//if user already exists then send error message to the client
//if user created successfully then send the user and token to the client


export const register  = async(req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existing = await User.findOne({ email }).select('+password');
    if (existing){
        return res.status(400).json({ message: "User already exists" });
    }
    try{
        //calling the function to hash the password
        const EncryptedPassword = await hashPassword(password);
        const user = await User.create({name, email, password: EncryptedPassword});

        // generating session token sending it to the client
        const token = jwt.sign({id: user._id, email:user.email, role:user.role, paid:user.paid}, process.env.JWT_SECRET, {expiresIn: '7d'});
        
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
//check emailk in mongo db , if not found then send error message to the client
//if found then compare the password with the hashed password in the database
//then generate a token and send it to the client along with the user details
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body, "debug- 1")
        const user = await User.findOne({email}).select('+password');
        console.log(user, "debug- 2")
        if (!user) return res.status(404).json({error: "user not found"})
        console.log(user)
        
        const match = await bcrypt.compare(password, user.password)
        console.log(match, "debug- 3")
        if (!match) return res.status(401).json({ error: "invalid credentials" });
        const token = jwt.sign( {id: user._id, email:user.email, role:user.role, paid:user.paid}, process.env.JWT_SECRET, {expiresIn: "1d"});
        console.log(token, "debug- 4")
        res.json({ token, user });
    } catch(err) {
        res.status(500).json({ error: err.message})
    }
}

