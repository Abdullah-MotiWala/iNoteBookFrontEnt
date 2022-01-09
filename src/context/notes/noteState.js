import React, { useState } from "react";
import NoteContext from "./noteContext";

const notes = [
  {
    _id: "1",
    user: "61d5fe7bcf8885f94ce563b2",
    title: "My name",
    description: "My name is Abdullah Junaid MotiWala1",
    tags: "name",
    time: "2022-01-09T15:45:20.373Z",
    __v: 0
  },
  {
    _id: "2",
    user: "61d5fe7bcf8885f94ce563b2",
    title: "My name",
    description: "My name is Abdullah Junaid MotiWala2",
    tags: "name",
    time: "2022-01-09T15:45:20.373Z",
    __v: 0
  },
  {
    _id: "3",
    user: "61d5fe7bcf8885f94ce563b2",
    title: "My name",
    description: "My name is Abdullah Junaid MotiWala3",
    tags: "name",
    time: "2022-01-09T15:45:20.373Z",
    __v: 0
  },
];

const NoteState = (props) => {
  const [curNotes, setCurNotes] = useState(notes);

  //addingNote
  const addNotes = (noteAdd) => {
    const { title, description, tags } = noteAdd;
    console.log(curNotes)
    console.log(title)
    //TODO: calling api
    const note = {
      _id: "61db0317274527889dcc4c27",
      user: "61d5fe7bcf8885f94ce563b2",
      title: title,
      description: description,
      tags: tags,
      time: "2022-01-09T15:45:20.373Z",
      __v: 0
    };
    setCurNotes(curNotes.concat(note));
    console.log(curNotes)
  };


  const delNotes = (id) => {
    const afterDel = curNotes.filter((noteObj) => {
      return noteObj._id !== id;
    });
    setCurNotes(afterDel);
    console.log(
      afterDel
    );
  };

  return (
    <NoteContext.Provider value={{ curNotes, addNotes, delNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
