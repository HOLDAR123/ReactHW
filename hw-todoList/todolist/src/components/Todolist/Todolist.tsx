import React, { useState } from "react";
import c from "./Todolist.module.scss";

interface Task {
  id: number;
  title: string;
  description: string;
}

function Todolist() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && description) {
      const newTask: Task = {
        id: Date.now(),
        title: title,
        description: description,
      };

      setTasks([...tasks, newTask]);

      setTitle("");
      setDescription("");
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`${c.todoList} ${isDarkTheme ? c.darkTheme : c.lightTheme}`}
    >
      <div className={c.todoListContainer}>
        <button onClick={toggleTheme} className={c.toggleTheme}>
          Toggle Theme
        </button>
        <form className={c.InputsContainer} onSubmit={handleSubmit}>
          <label>
            Task Title:
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              cols={30}
              rows={10}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>Task List:</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <strong>{task.title}</strong>: {task.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
