import React, {useState} from 'react'
import Task from './Task';
import { useEffect } from 'react';





const Home = () => {


  const initialArray = localStorage.getItem("tasks")?JSON.parse(
    localStorage.getItem("tasks")
  ):[];

  const [tasks,setTasks] = useState();
  const [title,setTitle]= useState("");
  const [description,setDescription] = useState("");
  console.log(title, description)

  const sumbitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks,{
      title,
      description,
    }]);
    
  };

  const deleteTask = (index) => {
    const filterArr = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filterArr);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  return <div className="container">
    <h1>DAILY GOALS</h1>
    <form onSubmit={sumbitHandler}>
        <input type="text" placeholder='Title'
        value={title} onChange={(e) =>setTitle(e.target.value)
        }/>
        <textarea placeholder='Description'
        value={description} onChange={(e) =>setDescription(e.target.value)}
        ></textarea>

        <button type='submit'>ADD</button>
    </form>
    {tasks.map((items, index)=>(
      <Task key={index} title={items.title}
      description={items.description}
      deleteTask={deleteTask}
      index={index}/>
    ))}
  </div>
};

export default Home;