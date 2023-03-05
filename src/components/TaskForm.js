import React, { useState, useContext,useEffect } from "react";
import TaskContext from "../context/TaskContext";

function TaskForm(props) {
    const { addTask,taskEdit,updateData } = useContext(TaskContext);
    const [taskInput, setTaskInput] = useState('');
    const [message, setMesaage] = useState('');

    useEffect(()=>{
        if(taskEdit.edit === true){
            setTaskInput(taskEdit.item.text)
        }
    },[taskEdit]);
    function handleTaskInput(e) {
        if (taskInput === '') {
            setMesaage(null)
        }
        else if (taskInput !== '' && taskInput.trim().length < 5) {
            setMesaage('Task must be atleast 5 chars...')
        }
        else {
            setMesaage(null);
        }
        setTaskInput(e.target.value);
        e.preventDefault();
    }
    function handleSubmitForm(e) {
        e.preventDefault();
        if (taskInput.trim().length > 5) {
            const newTask = {
                text: taskInput
            }
            if(taskEdit.edit === true){
                updateData(taskEdit.item.id,newTask)
            }
            else{
                addTask(newTask);
            }
            setTaskInput('');
        }
    }

    return (

        <form onSubmit={handleSubmitForm}>
            <div className="form">
                <input type="text" value={taskInput} className="input" onChange={handleTaskInput} />
                <button type='submit' className="add">Add Task</button>
            </div>
            {message && <div className="message">{message}</div>}
        </form >
    )
};

export default TaskForm;