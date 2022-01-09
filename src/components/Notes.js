import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { curNotes, setCurNotes } = context;
  return (
    <>
      <h4 className="my-4">Your Notes Here</h4>
      <div className="row">
        {curNotes.map((note, ind) => {
          return <NoteItem noteProp={note} key={ind} />;
        })}
      </div>
    </>
  );
}
