const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login Route (Vulnerable)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email, password } });
    if (user) {
      res.json({
        message: "Login successful",
        user: { id: user.id, email: user.email, role: user.role, name: user.email.split('@')[0] }
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;