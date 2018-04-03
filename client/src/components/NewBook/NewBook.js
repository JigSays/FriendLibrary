import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

//sets state to allow for input of new book into form
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

  //only allows new book to be submitted to database if and only if both Author & Title are completed
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

  //New book modal HTML
  render() {
    return (
        <div className="modal-body">
                     <Container fluid>
                         <Jumbotron><h2>Add New Book to My Library</h2></Jumbotron>
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
                                <option value="Biography">Biography</option>
                                <option value="Business">Business</option>
                                <option value="Childrens">Children's</option>
                                <option value="Cookbooks">Cookbooks</option>
                                <option value="Crime">Crime</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Historical Ficton">Historical Fiction</option>
                                <option value="Historical Non-Fiction">Historical Non-Fiction</option>
                                <option value="Horror">Horror</option>
                                <option value="Humor and Comedy">Humor and Comedy</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Non-Fiction">Non-Fiction</option>
                                <option value="Philosophy">Philosophy</option>
                                <option value="Poetry">Poetry</option>
                                <option value="Romance">Romance</option>             
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Sports">Sports</option>
                                <option value="Suspence">Suspence</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Travel">Travel</option>
                                <option value="Young Adult">Young Adult</option>
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
                            </div><br/>
                            <Input
                                 value={this.state.user}
                                 onChange={this.handleInputChange}
                                 name="user"
                                 placeholder="Your Name (required)"
                             />
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