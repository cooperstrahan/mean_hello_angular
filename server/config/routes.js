const taskController = require('../controller/taskController');

module.exports = app => {
  app
    .get('/tasks', taskController.getAll)
    .get('/tasks/:id', taskController.getOne)
    .get('https://pokeapi.co/api/v2/pokemon/4/', taskController.getPokemon)
    .post('/tasks', taskController.createTask)
    .put('/tasks/:id', taskController.updateTask)
    .delete('/tasks/:id', taskController.delete);
}