require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Users = require("../models/User");

exports.get_all_users = async (req, res) => {
  try {
    const users = await Users.find({}).select("-password");
    if (users.length === 0) {
      res.status(404).json({ message: "user not Found" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.get_user_by_id = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).send("user not found");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.delete_user_by_id = async (req, res) => {
  try {
    let user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(req.params.id);
    user = await User.findById(req.params.id);
    if (!user) {
      return res.status(200).json({ message: "User Deleted" });
    }
    return res.status(400).json({ message: "User Cannot Delete" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

exports.create_user = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const securePass = await bcrypt.hash(password, salt);

    user = new Users({ name, email, password: securePass });
    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);

    return res.status(200).json({ authToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

exports.user_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Users.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: "success", errors: "Invalid Credentials" });
    }
    const passwordcompare = await bcrypt.compare(password, user.password);
    if (!passwordcompare) {
      return res
        .status(400)
        .json({ success: "success", errors: "Invalid Credentials" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);

    return res.status(200).json({ authToken });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Internal server error");
  }
};

exports.update_user_by_id = async (req, res) => {
  const { name, address, mobile_no, pincode } = req.body;
  try {
    let user = await Users.findById(req.params.id);

    if (!user) {
      return res.status(404).send("Not Found");
    }
    if (name) {
      user.name = name;
    }
    if (address) {
      user.address = address;
    }
    if (mobile_no) {
      user.mobile_no = mobile_no;
    }
    if (pincode) {
      user.pincode = pincode;
    }
    user = await user.save();
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somthing Went Wrong" });
  }
};
