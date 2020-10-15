import React, { useState, useEffect, useRef } from 'react';

function TaskForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='task__form'>
      {props.edit ? (
        <div className='update'>
        <div className="update__header">Update Your Task</div>
        <div className="update__form">
          <input
            placeholder='Update yur task.'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='task__input '
          />
          <button onClick={handleSubmit} className='task__button '>
            Update
          </button>
          </div>
        </div>
      ) : (
        <>
          <input
            placeholder='Add Tasks'
            value={input}
            onChange={handleChange}
            name='text'
            className='task__input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='task__button'>
            Add Task
          </button>
        </>
      )}
    </form>
  );
}

export default TaskForm;
