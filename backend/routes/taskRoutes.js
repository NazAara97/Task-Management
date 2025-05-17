const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

console.log('isAuthenticated:', typeof isAuthenticated);
console.log('taskController.getAllTasks:', typeof taskController.getAllTasks);

router.get('/', isAuthenticated, taskController.getAllTasks);
router.post('/', isAuthenticated, taskController.createTask);
router.put('/:id', isAuthenticated, taskController.updateTask);
router.delete('/:id', isAuthenticated, taskController.deleteTask);

module.exports = router;
