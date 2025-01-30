import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';
import jwt from 'jsonwebtoken';
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password and confirm-password don't Match" });
        }

        // check if user exist in database
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // generate hashed password
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        let profilePic = "";
        if (gender === "male") {
            profilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        } else {
            profilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        }

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic
        })
        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();
            return res.status(201).json({
                message: "User registered successfully",
                user: {
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    username: newUser.username,
                    profilePic: newUser.profilePic
                }
            });
        } else {
            res.send(400).json({ error: "Something went wrong!" });
        }
    } catch (error) {
        console.log("Error in signup: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = bcrypt.compareSync(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        generateTokenAndSetCookie(user._id, res);
        return res.status(201).json({
            message: "User login successfully",
            user: {
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                profilePic: user.profilePic
            }
        });
    } catch (error) {
        console.log("Error in LogIn: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logout successful !!" });
    } catch (error) {
        console.log("Error in LogIn: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};
