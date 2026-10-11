import Todo1 from './Todo1.jsx';
import Todo2 from './Todo2.jsx';
import { useState } from 'react';

function TodoContainer() 
{
    const [activityArr, setactivityArr] = useState([
        {
            id: 1,
            activity: "Go for a Walk"
        },
        {
            id: 2,
            activity: "Have Breakfast"
        }, 
        {
            id: 3,
            activity: "Take a Shower"
        }
    ])

    return(
        <div className="flex gap-3 items-center flex-wrap">
            <Todo1 
                activityArr={activityArr} 
                setactivityArr={setactivityArr}
            />

            <Todo2 
                activityArr={activityArr} 
                setactivityArr={setactivityArr}
            />   
        </div>
    )
}

export default TodoContainer