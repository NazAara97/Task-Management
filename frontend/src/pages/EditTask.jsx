// Edit task page
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditTask() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    assignedTo: '',
    status: 'Pending'
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get(`http://localhost:5000/api/tasks/${id}`);
      const { title, description, deadline, assignedTo, status } = res.data;
      setFormData({
        title,
        description,
        deadline: deadline?.slice(0, 10), // format date for input
        assignedTo,
        status
      });
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/tasks/${id}`, formData);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="deadline"
          className="w-full p-2 border rounded"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="assignedTo"
          placeholder="Assigned To"
          className="w-full p-2 border rounded"
          value={formData.assignedTo}
          onChange={handleChange}
        />
        <select
          name="status"
          className="w-full p-2 border rounded"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Update Task
        </button>
      </form>
    </div>
  );
}

export default EditTask;
