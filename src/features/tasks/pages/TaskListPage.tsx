import { useTaskStore } from "../store/useTaskStore";

export default function TaskListPage() {
  const { tasks, addTask, toggleTask } = useTaskStore();
  const handleAdd = () => {
    const title = prompt("Task name:");
    if (title) addTask(title);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <button
        onClick={handleAdd}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`p-2 border rounded mb-2 cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
