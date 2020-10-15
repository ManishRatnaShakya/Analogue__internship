import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

function TaskList() {
  const [tasks, settasks] = useState([]);

  const addtask = task => {
    if (!task.text ) {
      return;
    }
    settasks([task, ...tasks]);
    console.log(...tasks);
  };


  
  const updatetask = (taskId, newValue) => {
    if (!newValue.text ) {
      return;
    }

    settasks((prev) =>
     prev.map((item) =>
      (item.id === taskId ? newValue : item)));
  };

  const removetask = id => {
    const remove = [...tasks].filter(task => task.id !== id);

    settasks(remove);
  };

  const completetask = id => {
    let updatedtasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    settasks(updatedtasks);
  };

  return (
    <>
      <div className="header">
      <h1>Task List</h1>
      </div>
      <div className="newTask">
        <div className="newTask__header">New Task</div>
      <TaskForm onSubmit={addtask} />
      
      </div>
      <Task
        tasks={tasks}
        completetask={completetask}
        removetask={removetask}
        updatetask={updatetask}
      />
    </>
  );
}

export default TaskList;
