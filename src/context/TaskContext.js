import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import TaskData from "../data/TaskData";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState(TaskData);
    const [taskEdit,setTaskEdit] = useState({item:{},edit:false});
    function addTask(newTask) {
        newTask.id = uuidv4();
        setTask([newTask, ...task])
    }
    function deleteTask(id) {
        if (window.confirm("Are you sure you want to delete...")) {
            setTask(task.filter((item) => item.id !== id))
        }
    }
    function updateTask(item){
        setTaskEdit({
            item,
            edit:true
        });
    }
    function updateData(id,updItem){
        setTask(task.map((item) => item.id === id ? { 
            ...item, ...updItem } : item))
    }
    return <TaskContext.Provider value={{
        task,
        deleteTask,
        addTask,
        updateData,
        updateTask,
        taskEdit
    }}>
        {children}
    </TaskContext.Provider>
}

export default TaskContext;