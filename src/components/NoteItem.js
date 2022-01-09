import React, { useContext } from "react";

export default function note(props) {
  const { noteProp } = props;
  return (
      <div className="card m-3 col-md-3 ">
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">{noteProp.title}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{noteProp.description}</li>
          <li className="list-group-item">#{noteProp.tags}</li>
        </ul>
        <div className="card-body">
          <button className="btn btn-success m-2">Edit</button>
          <button className="btn btn-danger m-2">Delete</button>
        </div>
      </div>
  );
}
