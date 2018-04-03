import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import BookCard from "../../components/BookCard";
import NewBook from "../../components/NewBook";
import Search from "../../components/Search";
import Nav from "../../components/Nav";
import "./Books.css";

//Sets state:
class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    rating: "",
    genre: "",
    status: "",
    user: "",
    showModal: false,
    showModal2: false,
    id: ""
  };


  //once page is loaded, all books currently in library load - can be changed to jut user's books
  componentDidMount() {
    this.loadBooks();
  }

  //function to returns API call to load all books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", rating: "", genre: "", status: "", user: ""  })
        
      )
      .catch(err => console.log(err));
  };

//function to delete individual book from a person's library; ideally should only be accessible to owner of the book
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

//function to allow for input in new book modal.
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      books: [],
      title: "",
      author: "",
      rating: "",
      genre: "",
      status: "",
      user: "",
      id: ""
    });
  };

  //function to allow the genre dropdown in Nav to work and render
  setGenre = event => {
    this.setState({genre: event.target.value}, this.search);
  }

  //function that pushes new book modal information to database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        rating: this.state.rating,
        status: this.state.status,
        user: this.state.user

      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  //function that handles the changes to the author or title fields in the search modal.
  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //function to determine which API to make based on information being searched in search modal
  search = () => {
    if (this.state.title) {
      API.getTitle(this.state.title)
        .then(res => this.setState({books: res.data}))
        .catch(err => console.log(err));
      }else if(this.state.author){
        API.getAuthor(this.state.author)
        .then(res => this.setState({books: res.data}))
        .catch(err => console.log(err));
      }else if(this.state.genre){
        API.getGenre(this.state.genre)
        .then(res => this.setState({books: res.data}))
        .catch(err => console.log(err));
    }
  };

//function to determine which API to make based on information being searched in search modal
  searchSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getTitle(this.state.title)
        .then(res => this.setState({books: res.data}))
        .catch(err => console.log(err));
      }else if(this.state.author){
        API.getAuthor(this.state.author)
        .then(res => this.setState({books: res.data}))
        .catch(err => console.log(err));
      }else if(this.state.genre){
        API.getGenre(this.state.genre)
        .then(res => this.setState({books: res.data}))
        .catch(err => console.log(err));
    }
  };
  

  render() {
    return (
      <Container fluid>
      <Nav genreChange={this.setGenre}/>
        <Row>
          <button onClick={() => this.setState({showModal: !this.state.showModal})}>Add New Book</button>
          {this.state.showModal && <NewBook/>}
          <button onClick={() => this.setState({showModal2: !this.state.showModal2})}>Search</button>
          {this.state.showModal2 && <Search clickHandler={this.searchSubmit} changeHandler={this.handleSearchChange} genre={this.state.genre} title={this.state.title} author={this.state.author}/>}
        </Row>
          <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h2>Lending Library:</h2>
            </Jumbotron>
              {this.state.books.length ? (
              <div key={this.state.books.id}>
                {this.state.books.map(elem => <BookCard current={elem} />)} 
              </div>
              ) : (
              <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
