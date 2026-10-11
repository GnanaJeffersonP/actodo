
import TodoItem from "./todoitem"
import { useState } from "react"

function Todo2(props) 
{
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr
    

    return(
        <div className="bg-violet-400 p-4 mt-5 rounded-md flex-grow">
            <h1 className="font-bold text-2xl text-black">
                Today's Activities
            </h1>

            {activityArr.length===0?<p>You have not add anything yet!</p>:""}

            {
                activityArr.map(function(item, index){
                    return (
                        <TodoItem 
                            key={item.id}
                            id={item.id}
                            activity={item.activity}
                            index={index}
                            activityArr={activityArr}
                            setactivityArr={setactivityArr}
                        />
                    )
                })
            }
        </div>
    )
}

export default Todo2