import User from "../models/userModel.js";
export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find(
            { _id: { $ne: loggedInUserId } },
            { password : 0}
        );
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};