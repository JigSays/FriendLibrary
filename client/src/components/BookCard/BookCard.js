import React from "react";
import "./BookCard.css";
import DeleteBtn from "../DeleteBtn";

const BookCard = props => (
  <div className="card">
    <div className="content">
      <ul>
        <li>
          <strong>Title:</strong> {props.current.title}
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
        <li>
          <p>ID: {props.current._id}</p>
        </li>
      </ul>
    </div>
    <DeleteBtn />
  </div>
);

export default BookCard;
