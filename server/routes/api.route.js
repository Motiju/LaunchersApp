import { Router } from "express";
import mongoose from "mongoose";

const apiLaunchersRoute = Router();

apiLaunchersRoute.get("/", (req, res) => {
    try {
        res.send("hello hhh")
    } catch (error) {
        res.send(error)
    }
})

apiLaunchersRoute.post("/", async (req, res) => {
    try {
        const { name, rocketType, latitude, longitude, city } = req.body
        // console.log(name, rocketType, latitude, longitude, city);
        async function connectionToMongo() {
            await mongoose.connect("mongodb://moti:1234@ac-tlkq4av-shard-00-00.kvweiys.mongodb.net:27017,ac-tlkq4av-shard-00-01.kvweiys.mongodb.net:27017,ac-tlkq4av-shard-00-02.kvweiys.mongodb.net:27017/?ssl=true&replicaSet=atlas-zzlaxa-shard-0&authSource=admin&appName=Cluster0");
            const launcherSchema = new mongoose.Schema({
                // id: Number,
                city: String,
                rocketType: String,
                latitude: Number,
                longitude: Number,
                name: String
            });
            const Launcher = mongoose.model('launcher', launcherSchema);
            const addLauncher = new Launcher({
                city: city,
                rocketType: rocketType,
                latitude: latitude,
                longitude: longitude,
                name: name
            });
            await addLauncher.save();
        }
        connectionToMongo()
        res.json({ message: "the launcher added succsefully" })
    } catch (error) {
        res.json({ error: `the problem is in the server in post: ${error}` })
    }
})

export default apiLaunchersRoute