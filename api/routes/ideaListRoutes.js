'use strict';
module.exports = function(app) {
  var ideaList = require('../controllers/ideaListController');

  // todoList Routes
  app.route('/ideas')
    .get(ideaList.list_all_ideas)
    .post(ideaList.create_a_idea);


  app.route('/ideas/:ideaId')
    .get(ideaList.read_a_idea)
    .put(ideaList.update_a_idea)
    .delete(ideaList.delete_a_idea);
};
