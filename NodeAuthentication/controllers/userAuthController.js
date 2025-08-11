const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const existUser = await User.findOne({ $or: [{ email }] });

        if (existUser) {
            return res.status(400).json({ message: "User already exist." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "User registered successfully."
        });

    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: "Login Successfully!",
            token
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

module.exports = { register, login };