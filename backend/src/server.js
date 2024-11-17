const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todo = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  server.post('/api/todo',async (req, res) => {
    const task = req.body;
    todoService.push(task);
    res.json(await todoService.getTodos(), { message : 'Task Added'})
  })

  server.put('api/todo/:id' , (req, res) => {
    const id = req.params.id;
    const task = req.body;
    todoService[id] = task;
    res.json({message : 'Task Updated'})
  })

  server.delete('api/todo/:id', (req, res) => {
    const id = req.params.id;
    todoService.splice(id, 1);
    res.json({message : 'Task Deleted'})
  })

  const port = process.env.port || 3000;
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

  return server;
};
module.exports = server;