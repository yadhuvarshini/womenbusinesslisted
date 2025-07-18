// profile api route get 
export const getProfile = async(req,res) =>{
    try {
        const user = req.user; // user is set in the authMiddleware
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            success: true,
            user
        });
    }
    catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}

// profile api route update
//id is fetched from req.user sent by auth middleware will be used to update the profile
// the froneend sends the updated data in the request body
// the updated data will be used to update the user in the database which is used in verification before updating through the auth middleware
// the updated data will be sent back to the client
// if the user is not found then send error message to the client
// if the user is found then update the user and send the updated user to the client
export const updateProfile = async(req, res) =>{
    try {
        const user = req.user;
        if(!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access, user not found"
            });
        }
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.profilePicture = req.body.profilePicture || user.profilePicture;

        if(req.body.business){
            user.business = {
                ...user.business, // keep existing business data
                ...req.body.business // update with new data from request body
            };
        }

        const updatedUser = await user.save();
        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                profilePicture: updatedUser.profilePicture,
                business: updatedUser.business
            }
        }); 

        //console log the updated user
        console.log('Updated user:',
            updatedUser);

    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}