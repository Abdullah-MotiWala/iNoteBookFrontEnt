import React, { useContext } from "react";
import Notes from "./Notes";
// import noteContext from "../context/notes/noteContext";

export default function Home() {
  // const context = useContext(noteContext);
  // const { curNotes, setCurNotes } = context;
  return (
    <div>
      {/* Notes */}
      <Notes />
    </div>
  );
}
