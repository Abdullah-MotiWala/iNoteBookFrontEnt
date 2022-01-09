import React, { useContext } from "react";
import Notes from "./Notes";
// import noteContext from "../context/notes/noteContext";

export default function Home() {
  // const context = useContext(noteContext);
  // const { curNotes, setCurNotes } = context;
  return (
    <div>
      <div className="mb-3">
        <h4 className="my-4">Add Your Notes</h4>
        <label className="form-label">
          Example label
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Another label
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input placeholder"
        />
        <button className="btn btn-primary my-4">Add your notes</button>
      </div>

      {/* calling notes */}
      <Notes />
    </div>
  );
}
