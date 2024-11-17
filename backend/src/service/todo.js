const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    addTodos: async (newTodo) =>{
      return await repository.addTodos(newTodo)
    },
  };
};

module.exports = todoService;