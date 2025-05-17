// Dashboard page
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const taskSummary = {
    total: tasks.length,
    pending: tasks.filter(task => task.status === 'Pending').length,
    inProgress: tasks.filter(task => task.status === 'In Progress').length,
    done: tasks.filter(task => task.status === 'Done').length
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-yellow-100 p-4 rounded shadow">Total Tasks: {taskSummary.total}</div>
        <div className="bg-red-100 p-4 rounded shadow">Pending: {taskSummary.pending}</div>
        <div className="bg-green-100 p-4 rounded shadow">Done: {taskSummary.done}</div>
      </div>

      <div className="flex gap-4">
        <Link to="/add-task" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Task
        </Link>
        <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
