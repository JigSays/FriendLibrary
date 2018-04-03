import React from "react";
import "./BookCard.css";
import DeleteBtn from "../DeleteBtn";

//Provides the layout for individual book layouts coming back from database.
const BookCard = props => (
  <div className="card" value={props.current._id}>
    <div className="content">
      <ul>
        <li>
          <h2>{props.current.title}</h2>
        </li>
        <li>
          <strong>Author:</strong> {props.current.author}
        </li>
        <li>
          <strong>Genre:</strong> {props.current.genre}
        </li>
        <li>
          <strong>Rating:</strong> {props.current.rating}
        </li>
        <li>
          <strong>Status:</strong> {props.current.status}
        </li>
        <li>
          <strong>Friend:</strong> {props.current.user}
        </li>
      </ul>
    </div>
    <DeleteBtn />
  </div>
);

export default BookCard;
