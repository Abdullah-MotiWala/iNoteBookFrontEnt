import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import { AddNotes } from "./AddNotes";

export default function Notes() {
  const context = useContext(noteContext);
  const { curNotes } = context;
  return (
    <>
      <AddNotes />
      <h4 className="my-4">Your Notes Here</h4>
      <div className="row">
        {curNotes.map((note, ind) => {
          return <NoteItem noteObj={note} key={ind} />;
        })}
      </div>
    </>
  );
}
