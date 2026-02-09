const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // 1. Création de l'utilisateur dans la BDD
    // VULNÉRABILITÉ : Mot de passe stocké en clair (pour ton projet)
    const newUser = await User.create({
      email,
      password,
      name,
      role: 'USER'
    });

    console.log(`[AUTH] New user registered: ${email}`);
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
        name: newUser.name
      }
    });
  } catch (err) {
    console.error("[AUTH] Register error:", err);
    res.status(500).json({ error: "Email already exists or server error" });
  }
});
// --- LOGIN ROUTE (VULNERABLE TO SQL INJECTION) ---
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 🔥 VULNERABILITY: Raw query with string concatenation
    const query = `SELECT * FROM Users WHERE email = '${email}' AND password = '${password}'`;
    console.log("------------------------------------------");
    console.log("Executing SQL Query:", query);
    console.log("------------------------------------------");
    const results = await User.sequelize.query(query, { 
      type: User.sequelize.QueryTypes.SELECT 
    });

    // We check if the array contains at least one user
    if (results && results.length > 0) {
      const user = results[0];
      console.log(`[AUTH] Login success for: ${user.email}`);

      res.json({
        message: "Login successful",
        user: { 
          id: user.id, 
          email: user.email, 
          role: user.role, 
          name: user.name || user.email.split('@')[0] 
        }
      });
    } else {
      console.log(`[AUTH] Login failed for: ${email}`);
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.error("❌ SQL Error:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

module.exports = router;