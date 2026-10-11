import { useState } from "react"

function Todo1(props)
{
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    const [newactivity,setnewacticity]=useState("")

    function handleChange(evt)
    {
 setnewacticity(evt.target.value)
    }

   function handleAdd(){
    setactivityArr([...activityArr, { id: activityArr.length + 1, activity: newactivity }])
    setnewacticity("")
}

    
    return(
        <div>
             <div>
                <h1 className="text-2xl font-bold">Manage Activities</h1>
                <div className="mt-3">
                <input value={newactivity} onChange={handleChange} className="border border-black p-2" type="text" placeholder="Add your activity here" />
                <button onClick={handleAdd} className="bg-black text-white p-2 border border-black">Add</button>
                </div>
            </div>
        </div>

    )
}
export default Todo1