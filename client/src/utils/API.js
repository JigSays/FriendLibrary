import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets books added in last 30 days
  getNew: function() {
    return axios.get("/api/new");
  },
  // Gets the book with the given id
  getTitle: function(id) {
    return axios.get("/api/books/title/" + id);
  },
  getAuthor: function(id) {
    return axios.get("/api/books/author/" + id);
  },
  getGenre: function(id) {
    return axios.get("/api/books/genre/" + id);
  },
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
