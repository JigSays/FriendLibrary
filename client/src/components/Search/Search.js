import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

class Search extends Component {
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
    if (this.state.title) {
      API.getBooks({
        title: this.state.title
      })}else if(this.state.author){
        API.getBooks({
            author: this.state.author
      })}else if(this.state.genre){
        API.getBooks({
            genre: this.state.genre
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <div className="modal-body">
                     <Container fluid>
                         <Jumbotron><h1>Search for a Book in the Library</h1></Jumbotron>
                         <form>
                             <Input
                                 value={this.state.title}
                                 onChange={this.handleInputChange}
                                 name="title"
                                 placeholder="Title"
                             />
                                <Input
                                value={this.state.author}
                                onChange={this.handleInputChange}
                                name="author"
                                placeholder="Author"
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
                            <div className="modal-footer">
                            <FormBtn
                                 disabled={!(this.state.author || this.state.title || this.state.genre)}
                                 onClick={this.handleFormSubmit}
                            >Search</FormBtn>
                            </div>
        </form>
        </Container>
        </div>
    );
}
}


export default Search;