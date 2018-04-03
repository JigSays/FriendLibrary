import React from "react";
import "./DeleteBtn.css";

//would be really good if this worked associated with ID from database and only was allowd to work when logged-in user = book owner user.
const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    ✗
  </span>
);

export default DeleteBtn;
