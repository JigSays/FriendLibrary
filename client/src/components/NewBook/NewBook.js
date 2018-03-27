import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

class NewBook extends Component {
    state = {
      books: [],
      title: "",
      author: "",
      rating: "",
      genre: "",
      status: "",
      user: ""
    };

    loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", rating: "", genre: "", status: "", user: ""  })
            
          )
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
        <div className="modal-body">
                     <Container fluid>
                         <Jumbotron><h1>Add New Book to My Library</h1></Jumbotron>
                         <form>
                             <Input
                                 value={this.state.title}
                                 onChange={this.handleInputChange}
                                 name="title"
                                 placeholder="Title (required)"
                             />
                                <Input
                                value={this.state.author}
                                onChange={this.handleInputChange}
                                name="author"
                                placeholder="Author (required)"
                            />
                            <div>
                                <span>Genre </span>
                            <select
                                value={this.state.genre}
                                onChange={this.handleInputChange}
                                name="genre"
                                placeholder="Genre"
                            >
                                <option value=""></option>
                                <option value="Romance">Romance</option>
                                <option value="Historical Non-Fiction">Historical Non-Fiction</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Biography">Biography</option>
                            </select>
                            </div><br/>
                            <div>
                                <span>Rating: </span>
                            <select
                                value={this.state.rating}
                                onChange={this.handleInputChange}
                                name="rating"
                                placeholder="Rating"
                            >
                                <option value=""></option>
                                <option value="1">1/5</option>
                                <option value="2">2/5</option>
                                <option value="3">3/5</option>
                                <option value="4">4/5</option>
                                <option value="5">5/5</option>
                            </select>
                            </div><br/>
                            <div>
                                <span>Availability: </span>
                            <select
                                value={this.state.status}
                                onChange={this.handleInputChange}
                                name="status"
                                placeholder="Available"
                            >
                                <option value=""></option>
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>
                            </div>
                            <div class="modal-footer">
                            <FormBtn
                                 disabled={!(this.state.author && this.state.title)}
                                 onClick={this.handleFormSubmit}
                            >Add Book</FormBtn>
                            </div>
        </form>
        </Container>
        </div>
    );
}
}


export default NewBook;