import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
    origin: "http://localhost:8100",
    credentials: true,
};
app.use(cors(corsOption));

// Routes
// app.use("/api/v1/auth", require("./routes/authRoutes"));
// app.use("/api/v1/tasks", require("./routes/taskRoutes"));
// app.use("/api/v1/user", require("./routes/userRoutes"));

// Error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send("Something went wrong!");
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
