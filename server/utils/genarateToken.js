import Jwt from "jsonwebtoken";

const generateTokenAndCookie = (userId, res) => {

    const token = Jwt.sign({ userId }, process.env.jwt_s_key, {
        expiresIn: "2d"
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15-Days
        httpOnly: true, //To prevent xss scripting security threts
        sameSite: "strict", //To prevent CSRF cross-site request forgery attack
        secure: process.env.ProductionSEC !== "development"
    })
}

export default generateTokenAndCookie;
