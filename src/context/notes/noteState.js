import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
const [curState,setCurState] = useState({name: "Abdullah"})
  return (
  <NoteContext.Provider value = {curState}>
      {props.children}
    </NoteContext.Provider>)
};
export default NoteState;
