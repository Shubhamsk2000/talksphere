import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });

    res.cookie("jwt", token, {
        maxAge: 1000*60*60*24*30,
        httpOnly: true,
        sameSite: "strict"
    })
}
export default generateTokenAndSetCookie;

