import { Router } from "express";
import mongoose from "mongoose";
import { isInputNotEmpty } from "../middelware/is_input_not_empty.middelware.js";
import { Launcher } from "../utils/connetion_to_mongo.js";

const apiLaunchersRoute = Router();

apiLaunchersRoute.get("/", async (req, res) => {
    try {
        const allLauncher = await Launcher.find();
        res.json({ message: allLauncher })
    } catch (error) {
        res.json({ error: error })
    }
})

apiLaunchersRoute.get("/:id", async (req, res) => {
    try {
        try {
            const launcherDetails = await Launcher.find({ _id: `${req.params.id}` });
            console.log(launcherDetails);
            if (launcherDetails) {
                return res.json({ message: launcherDetails })
            }
        } catch (error) {
            return res.json({ message: "this id didn't exsist" })
        }
    } catch (error) {
        res.json({ error: `the problem is in get by id:  ${error}` })
    }
})

apiLaunchersRoute.post("/", isInputNotEmpty, async (req, res) => {
    try {
        const { name, rocketType, latitude, longitude, city } = req.body
        async function addToMongo() {
            const addLauncher = new Launcher({
                city: city,
                rocketType: rocketType,
                latitude: latitude,
                longitude: longitude,
                name: name
            });
            await addLauncher.save();
        }
        addToMongo()
        res.json({ message: "the launcher added succsefully" })
    } catch (error) {
        res.json({ error: `the problem is in the server in post: ${error}` })
    }
})

apiLaunchersRoute.delete("/:id", async (req, res) => {
    try {
        try {
            await Launcher.deleteOne({ _id: `${req.params.id}` });
            res.json({ message: "the id delted succsfully" })
        } catch (error) {
            return res.json({ message: "this id didn't exsist" })
        }
    } catch (error) {
        res.json({ error: `the problem is in delete by id:  ${error}` })
    }
})

apiLaunchersRoute.put("/id", async (req, res) => {
    try {
        try {
            await Launcher.updateOne({ _id: `${req.params.id}` });
            res.json({ message: "the id update succsfully" })
        } catch (error) {
            return res.json({ message: "this id didn't exsist" })
        }
    } catch (error) {
        res.json({ error: `the problem is in delete by id:  ${error}` })
    }
})

export default apiLaunchersRoute