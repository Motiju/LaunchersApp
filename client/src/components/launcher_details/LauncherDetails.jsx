import { useState } from 'react'

function LauncherDetails() {

    const [userSearch, setUserSearch] = useState("")
    const [isMatch, setIsMattch] = useState("")

    function getUserChange(e) {
        setUserSearch(e.target.value)
    }

    async function sendData() {
        const res = await fetch(`http://localhost:3000/api/launchers/${userSearch}`)
        const getResponse = await res.json()
        console.log(getResponse);
        if (getResponse.message === `this id didn't exsist`) {
            return setIsMattch(getResponse.message)
        }
        const { _id, city,rocketType, latitude, longitude, name } = getResponse.message[0]
        setIsMattch(`id: ${_id}, city: ${city},rocketType: ${rocketType}, latitude: ${latitude}, longitude: ${longitude}, ${name}`)
    }

    return ( 
        <div>
            <br />
            <label htmlFor="userSearch">id: </label>
            <input type="text" placeholder='please enter the id that you want to get' onChange={getUserChange} /><br /><br />
            <button onClick={sendData}>submit</button>
            <h3>{isMatch}</h3>
        </div>
    )
}

export default LauncherDetails