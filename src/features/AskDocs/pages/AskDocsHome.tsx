import useTaskStore from "features/tasks/store/useTaskStore";

const AskDocsHome = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTaskStore();

  const handleAddTask = () => {
    const title = prompt("Enter task title");
    if (title) addTask(title);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <button
        onClick={handleAddTask}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between mb-2 p-2 border rounded"
          >
            <span
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AskDocsHome;
