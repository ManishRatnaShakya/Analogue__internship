import React, { useState } from 'react';
import TaskForm from './TaskForm';


const Task = ({ tasks, completetask, removetask, updatetask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updatetask(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
<div className="currentTask">
 
  <div className="currentTask__header">
    Current Task
  </div>
  <div className="currentTask__tasks">
    {tasks.length===0?<p>Nothing to show..</p>:<div>
  {tasks.map((task, index) => (
    <div
      className={task.isComplete ? 'task__row complete' : 'task__row'}
      key={index}
    >
      <div key={task.id} onClick={() => completetask(task.id)}>
        {task.text}
      </div>
      <div className='icons'>
        <button
          onClick={() => removetask(task.id)}
          className='delete'
        >Delete</button>
        <button
          onClick={() => setEdit({ id: task.id, value: task.text })}
          className='edit'
        >Edit</button>
      </div>
    </div>
    
    ))}</div>}
  </div>
  </div>
  );
};

export default Task;
