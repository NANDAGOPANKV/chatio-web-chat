import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
import generateTokenAndCookie from '../utils/genarateToken.js'

// sign up user
const signupUser = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req?.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password dosen't match" })
        }

        const userExists = await User.findOne({ username })

        if (userExists) {
            return res.status(400).json({ error: "Username already exists" })
        }

        //   https://avatar.iran.liara.run/ *avatar for prifile
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        // password hashing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullname, username, password: hashedPassword, gender, profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            // Generate JWT Token And Set On Cookie 
            generateTokenAndCookie(newUser?._id, res)
            await newUser.save();
            res.status(201).json({ _id: newUser?._id, fullname: newUser?.fullname, username: newUser?.username, profilePic: newUser?.profilePic })
        } else {
            res.status(400).json({ error: "Invalid user data" })
        }

    } catch (error) {
        console.log("Error in sign up controller", error?.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// sign in user
const signinUser = async (req, res) => {
    try {
        const { username, password } = req?.body;
        const user = await User.findOne({ username })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Credentials" })
        }

        generateTokenAndCookie(user?._id, res)

        res.status(200).json({
            _id: user?._id,
            fullName: user?.fullname,
            username: user?.username,
            profilePic: user?.profilePic
        })

    } catch (error) {
        console.log("Error in signin controller", error?.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// log out user 
const signoutUser = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log("Error in signout controller", error?.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export {
    signinUser, signupUser, signoutUser
}
