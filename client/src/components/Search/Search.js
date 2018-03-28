import React from "react";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

const Search = props =>  {

    return (
        <div className="modal-body">
                     <Container fluid>
                         <Jumbotron><h1>Search for a Book in the Library</h1></Jumbotron>
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
                                <option value="Romance">Romance</option>
                                <option value="Historical Non-Fiction">Historical Non-Fiction</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Biography">Biography</option>
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