import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyToken = (req,res,next)=>{
    //const token = req.cookies.token;
    console.log(req)
    
    // if(!token) return res.status(401).json({message: "Not Authenticated"})

    // jwt.verify(token,process.env.JWT_SECURITY_KEY,async(err,payload)=>{
    //     if(err) return res.status(403).json({message: "Token is not Valid!"})
    
    //     req.userId=payload.id;
    //     next()
    // })
}

