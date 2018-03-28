import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import BookCard from "../../components/BookCard";
import NewBook from "../../components/NewBook";
import Search from "../../components/Search";

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

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", rating: "", genre: "", status: "", user: ""  })
        
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

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

  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


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
