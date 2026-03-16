import { Router } from "express";
import mongoose from "mongoose";
import { isInputNotEmpty } from "../middelware/is_input_not_empty.middelware.js";

const apiLaunchersRoute = Router();

apiLaunchersRoute.get("/", async (req, res) => {
    try {
        await mongoose.connect("mongodb://moti:1234@ac-tlkq4av-shard-00-00.kvweiys.mongodb.net:27017,ac-tlkq4av-shard-00-01.kvweiys.mongodb.net:27017,ac-tlkq4av-shard-00-02.kvweiys.mongodb.net:27017/?ssl=true&replicaSet=atlas-zzlaxa-shard-0&authSource=admin&appName=Cluster0");
        const launcherSchema = new mongoose.Schema({
            city: String,
            rocketType: String,
            latitude: Number,
            longitude: Number,
            name: String
        });
        const Launcher = mongoose.model('launcher', launcherSchema);
        const allLauncher = await Launcher.find();
        console.log(allLauncher);
        res.json({ message: allLauncher })
    } catch (error) {
        res.json({ error: error })
    }
})

apiLaunchersRoute.post("/", isInputNotEmpty, async (req, res) => {
    try {
        const { name, rocketType, latitude, longitude, city } = req.body
        // console.log(name, rocketType, latitude, longitude, city);
        async function connectionToMongo() {
            await mongoose.connect("mongodb://moti:1234@ac-tlkq4av-shard-00-00.kvweiys.mongodb.net:27017,ac-tlkq4av-shard-00-01.kvweiys.mongodb.net:27017,ac-tlkq4av-shard-00-02.kvweiys.mongodb.net:27017/?ssl=true&replicaSet=atlas-zzlaxa-shard-0&authSource=admin&appName=Cluster0");
            const launcherSchema = new mongoose.Schema({
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