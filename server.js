const express = require("express");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const db = require("./config/db");

dotenv.config();
const app = express();

app.use(express.json());

// DB Connection Test
db.getConnection()
  .then((conn) => {
    console.log("MySQL connected successfully");
    conn.release();
  })
  .catch((err) => {
    console.error("MySQL connection error:", err);
  });

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
