import express from "express"
import cookieParser from "cookie-parser"
import APIRouter from "./apiRouter"
import cors from "cors"
import * as dotenv from "dotenv";


dotenv.config()
const PORT = process.env.PORT || '5000';
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: PORT ?? "http://localhost:5175",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true
    })
)
app.use("/api", APIRouter)

export default app