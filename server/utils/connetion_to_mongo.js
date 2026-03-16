import mongoose from "mongoose";

let connection;
let launcherSchema
let Launcher;

async function connectionToMongo() {
    connection = await mongoose.connect("mongodb://moti:1234@ac-tlkq4av-shard-00-00.kvweiys.mongodb.net:27017,ac-tlkq4av-shard-00-01.kvweiys.mongodb.net:27017,ac-tlkq4av-shard-00-02.kvweiys.mongodb.net:27017/?ssl=true&replicaSet=atlas-zzlaxa-shard-0&authSource=admin&appName=Cluster0");
    console.log("the data base connected");
    launcherSchema = new mongoose.Schema({
        city: String,
        rocketType: String,
        latitude: Number,
        longitude: Number,
        name: String
    });
    Launcher = mongoose.model('launcher', launcherSchema);
}

export { connection, launcherSchema, Launcher, connectionToMongo }