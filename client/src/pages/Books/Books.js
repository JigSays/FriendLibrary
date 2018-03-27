import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import BookCard from "../../components/BookCard";
import NewBook from "../../components/NewBook";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    rating: "",
    genre: "",
    status: "",
    user: ""
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
      [name]: value
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

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <button onClick={() => <NewBook/>}>Add New Book</button> */}
          <button onClick={() => this.setState({showModal: !this.state.showModal})}>Add Work Log</button>
          {this.state.showModal && <NewBook/>}
        </Row>
          <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Lending Library:</h1>
            </Jumbotron>
              {this.state.books.length ? (
              <div>
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
