import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

import authRoute from './router/auth.route.js'
import messageRoute from './router/message.route.js'
import usersRoute from './router/users.route.js'
import connectToMongoDB from "./db/dbConnector.js";

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/messages", messageRoute)
app.use("/api/users",usersRoute)


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running On Port : ${PORT}`)
});
