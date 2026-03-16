import { useState, useEffect } from "react"

function ShowLaunchers() {

  const [allLaunchers, setAllLaunchers] = useState([])

  async function getAllLaunchers() {
    const res = await fetch("http://localhost:3000/api/launchers")
    const getResponse = await res.json()
    console.log(getResponse)
    setAllLaunchers(getResponse.message)
  }

  useEffect(() => {
    getAllLaunchers()
  }, [])

  console.log(allLaunchers);
  

  return (
    <div>
      {allLaunchers?.map((launchers)=>
        (
          <p key={launchers._id}>{launchers.name}</p>
        )

        
      )}
      {/* <table>
        <tr>
          <th>Person 1</th>
          <th>Person 2</th>
          <th>Person 3</th>
        </tr>
        <tr>
          <td>Emil</td>
          <td>Tobias</td>
          <td>Linus</td>
        </tr>
        <tr>
          <td>16</td>
          <td>14</td>
          <td>10</td>
        </tr>
      </table> */}
    </div>
  )
}

export default ShowLaunchers