import React from "react";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

const Search = props =>  {

    return (
        <div className="modal-body">
                     <Container fluid>
                         <Jumbotron><h2>Search for a Book in the Library</h2></Jumbotron>
                         <form>
                             <Input
                                 value={props.title}
                                 onChange={props.changeHandler}
                                 name="title"
                                 placeholder="Title"
                             />
                                <Input
                                value={props.author}
                                onChange={props.changeHandler}
                                name="author"
                                placeholder="Author"
                            />
                            <div>
                                <span>Genre </span>
                            <select
                                value={props.genre}
                                onChange={props.changeHandler}
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
                            <div className="modal-footer">
                            <FormBtn
                                //  disabled={!(this.state.author || this.state.title || this.state.genre)}
                                 onClick={props.clickHandler}
                            >Search</FormBtn>
                            </div>
        </form>
        </Container>
        </div>
    );

}


export default Search;