import jwt from 'jsonwebtoken'

import User from '../model/user.model.js'


const protectRoute = async (req, res, next) => {
    try {
        const token = req?.cookies?.jwt
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" })
        }

        const decode = jwt.verify(token, process.env.jwt_s_key)

        if (!decode) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" })
        }

        const user = await User.findById(decode?.userId).select("-password")

        req.user = user;
        next()

    } catch (error) {
        console.log("Error in send message : ", error?.message);
        return res.status(500).json({ error: "Internal server error" })
    }
}

export default protectRoute;
