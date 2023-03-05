import TaskItem from "./TaskItem";
import TaskContext from "../context/TaskContext";
import { useContext } from "react";

function TaskList(props) {
    const {task} = useContext(TaskContext);
    return (
        <ul className="todo-items">
            {
                task.map((item) => (
                    <TaskItem key={item.id} item={item} />
                ))
            }
        </ul>
    )
};

export default TaskList;