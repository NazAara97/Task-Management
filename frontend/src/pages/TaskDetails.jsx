// Task details view page
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get(`http://localhost:5000/api/tasks/${id}`);
      setTask(res.data);
    };
    fetchTask();
  }, [id]);

  if (!task) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-3xl font-bold mb-4">{task.title}</h2>
      <p className="mb-2"><strong>Description:</strong> {task.description || 'No description'}</p>
      <p className="mb-2"><strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</p>
      <p className="mb-2"><strong>Assigned To:</strong> {task.assignedTo || 'Unassigned'}</p>
      <p className="mb-4"><strong>Status:</strong> {task.status}</p>
      <Link
        to={`/edit-task/${task._id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Edit Task
      </Link>
    </div>
  );
}

export default TaskDetails;

