import express from "express";
import cors from "cors";
import apiLaunchersRoute from "./routes/api.route.js";
import { connectionToMongo } from "./utils/connetion_to_mongo.js";

const app = express()
app.use(express.json())
app.use(cors())

connectionToMongo()
app.use("/api/launchers", apiLaunchersRoute)

app.listen(3000, ()=>{
    console.log("the server is working on port 3000: ");
})