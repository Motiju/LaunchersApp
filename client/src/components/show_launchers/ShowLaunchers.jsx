import { useState, useEffect } from "react"

function ShowLaunchers() {

  const [allLaunchers, setAllLaunchers] = useState([])
  const [userSearch, setUserSearch] = useState("")

  async function getAllLaunchers() {
    const res = await fetch("http://localhost:3000/api/launchers")
    const getResponse = await res.json()
    console.log(getResponse.message)
    setAllLaunchers(getResponse.message)
  }

  function getUserChange(e) {
    setUserSearch(e.target.value)
  }

  async function deleteOne() {
    const res = await fetch(`http://localhost:3000/api/launchers/${userSearch}`, {
      method: "delete"
    })
    const getResponse = await res.json()
    console.log(getResponse);
  }

  useEffect(() => {
    getAllLaunchers()
    console.log(allLaunchers);

  }, [])

  return (
    <div>
      <label htmlFor="delete">delete by id: </label>
      <input type="text" onChange={getUserChange} /><br />
      <button onClick={deleteOne}>delete</button>
      {allLaunchers.map((launchers) =>
      (
        <p key={launchers._id}>{launchers._id} | {launchers.city} | {launchers.rocketType} | {launchers.latitude} | {launchers.longitude} | {launchers.name}</p>
      )
      )}
    </div>
  )
}

export default ShowLaunchers