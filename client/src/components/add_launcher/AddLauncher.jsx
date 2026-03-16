import { useState } from "react";
// import axios from "axios"

function AddLauncher() {
    const [name, setName] = useState("")
    const [rocketType, setRocketType] = useState("Shahab3")
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [city, setCity] = useState("")

    function changeName(e) {
        setName(e.target.value)
    }

    function changeRocketType(event) {
        setRocketType(event.target.value)
    }

    function changeLatitude(e) {
        setLatitude(e.target.value)
    }

    function changeLongitude(e) {
        setLongitude(e.target.value)
    }

    function changeCity(e) {
        setCity(e.target.value)
    }

    async function sendData() {
        const res = await fetch("http://localhost:3000/api/launchers", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            // firstName: 'Fred',
            // lastName: 'Flintstone'
            body: JSON.stringify({ name, rocketType, latitude, longitude, city })
        })
        const getResponse = await res.json()
        console.log(getResponse);
    }

    return (
        <div>
            <br /><br />
            <label htmlFor="name">name: </label>
            <input type="text" onChange={changeName} /><br /><br />
            <label htmlFor="rocketType">rocket type: </label>
            <select value={rocketType} onChange={changeRocketType}>
                <option value="Shahab3">Shahab3</option>
                <option value="Fetah110">Fetah110</option>
                <option value="Radwan">Radwan</option>
                <option value="Kheibar">Kheibar</option>
            </select><br /><br />
            <label htmlFor="latitude">latitude: </label>
            <input type="number" onChange={changeLatitude} /><br /><br />
            <label htmlFor="longitude">longitude: </label>
            <input type="number" onChange={changeLongitude} /><br /><br />
            <label htmlFor="city">city: </label>
            <input type="text" onChange={changeCity} /><br /><br />
            <button onClick={sendData}>submit</button>
        </div>
    )
}

export default AddLauncher