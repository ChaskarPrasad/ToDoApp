import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskItem(props) {
    const {deleteTask,updateTask} = useContext(TaskContext);
    
    return (
        <li className="item" data-key="1594003133171">
            <h5>{props.item.text}</h5>
            <button className="delete" onClick={()=>deleteTask(props.item.id)}>Delete</button>
            <button className="delete" onClick={()=>updateTask(props.item)}>Update</button>
        </li>
    )
};

export default TaskItem;