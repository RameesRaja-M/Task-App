require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoUrl: process.env.MONGO_URL,
  frontendUrl:
    process.env.FRONTEND_URL || "https://task-apps-client.vercel.app",
};
