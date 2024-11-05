import React, { useEffect, useState } from 'react';
import Card from './Card';

const App = () => {
  const [inptask, setInputTask] = useState('');
  const [AddOn, setAddOn] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem('EachTASK');
    if (savedTasks) {
      try {
        setAddOn(JSON.parse(savedTasks)); // Parse and set state with stored tasks
      } catch (error) {
        console.error("Error parsing saved tasks from localStorage:", error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever the AddOn state changes
  useEffect(() => {
    if (AddOn.length > 0) { // Avoid overwriting with empty state on initial render
      localStorage.setItem('EachTASK', JSON.stringify(AddOn));
    }
  }, [AddOn]);

  const saveTask = () => {
    if (inptask.trim()) {
      setAddOn((prev) => [...prev, inptask]);
      setInputTask('');
    }
  };

  const removeTask = (index) => {
    const filteredTasks = AddOn.filter((_, i) => i !== index);
    setAddOn(filteredTasks);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <div className="w-[50%] flex items-center">
        <input
          type="text"
          onChange={(e) => setInputTask(e.target.value)}
          value={inptask}
          className='border border-black w-full p-2'
          placeholder="Enter your task"
        />
        <button onClick={saveTask} className='bg-green-700 mx-2 w-12 h-auto rounded-lg p-1 text-white'>ADD</button>
      </div>

      {/* Display tasks below the input field */}
      <div className='mt-4 w-[50%]'>
        {AddOn.map((element, index) => (
          <Card key={index} task={element} trash={() => removeTask(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;
