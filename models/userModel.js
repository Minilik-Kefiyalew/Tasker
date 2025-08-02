const db = require("../config/db");

const User = {
  getAll: async () => {
    const [rows] = await db.query("SELECT id, name, email FROM users"); // Exclude password in list
    return rows;
  },

  create: async (name, email, password) => {
    const [result] = await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    return result.insertId;
  },
};

module.exports = User;
