const router = require("express").Router();
const booksController = require("../../controllers/booksController");


// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

  router
  .route("/author/:id")
  .get(booksController.findByAuthor)
  .put(booksController.update)
  .delete(booksController.remove);

  router
  .route("/title/:id")
  .get(booksController.findByTitle)
  .put(booksController.update)
  .delete(booksController.remove);

  router
  .route("/genre/:id")
  .get(booksController.findByGenre)
  .put(booksController.update)
  .delete(booksController.remove);

  router
  .route("/new")
  .get(booksController.findNew)

module.exports = router;
