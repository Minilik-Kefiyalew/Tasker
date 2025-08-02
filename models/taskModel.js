const db = require("../config/db");

const Task = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM tasks");
    return rows;
  },

  create: async (title, description) => {
    const [result] = await db.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );
    return result.insertId;
  },
};

module.exports = Task;
