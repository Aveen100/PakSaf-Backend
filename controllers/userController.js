const {
  createUser,
  getUserByEmail,
  findUserByUsernameOrEmail,
  User,
} = require("../models/userModel");

async function signup(req, res) {
  const userData = req.body;

  try {
    // Check if user with the same username or email already exists
    const existingUser = await findUserByUsernameOrEmail(
      userData.Username,
      userData.Email
    );
    if (existingUser.length) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    } else {
      // If no existing user found, proceed to create the new user
      await createUser(userData);
      return res.status(200).json({ message: "User created successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email, password);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User found", user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function GetUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);

    res.status(200).json({
      message: "user Found successfully",
      user,
      code: 200,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
}

async function updateUserBalance(req, res) {
  try {
    let { UserId, Balance, ClearBalance } = req.body;
    let UserData = await User.findByPk(UserId);
    if (ClearBalance) {
      UserData.Balance = 0;
      await UserData.save();
      res.status(200).json({
        message: "Balance Sent to the User successfully",
        UserData,
        code: 200,
      });
    }
    else if (UserData && !ClearBalance) {
      if (UserData.Balance == null) {
        UserData.Balance = 0;
      }
      UserData.Balance += Balance;
      await UserData.save();
      res.status(200).json({
        message: "Balance added in User Account successfully",
        UserData,
        code: 200,
      });
    } 
    
    
    else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
}

module.exports = {
  signup,
  login,
  updateUserBalance,
  GetUserById,
};
