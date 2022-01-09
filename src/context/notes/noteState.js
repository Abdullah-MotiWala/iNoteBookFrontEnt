import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notes = [
    {
      _id: "61db0317274527889dcc4c27",
      user: "61d5fe7bcf8885f94ce563b2",
      title: "My name",
      description: "My name is Abdullah Junaid MotiWala",
      tags: "name",
      time: "2022-01-09T15:45:20.373Z",
      __v: 0
    },
    {
      _id: "61db031b274527889dcc4c29",
      user: "61d5fe7bcf8885f94ce563b2",
      title: "My name",
      description: "My name is Abdullah Junaid MotiWala",
      tags: "name",
      time: "2022-01-09T15:45:20.373Z",
      __v: 0
    },
    {
      _id: "61db031b274527889dcc4c2b",
      user: "61d5fe7bcf8885f94ce563b2",
      title: "My name",
      description: "My name is Abdullah Junaid MotiWala",
      tags: "name",
      time: "2022-01-09T15:45:20.373Z",
      __v: 0
    },
    {
      _id: "61db0327274527889dcc4c2d",
      user: "61d5fe7bcf8885f94ce563b2",
      title: "My name is someone",
      description: "My name is Abdullah Junaid MotiWala",
      tags: "name",
      time: "2022-01-09T15:45:20.373Z",
      __v: 0
    },
    {
      _id: "61db0327274527889dcc4c2d",
      user: "61d5fe7bcf8885f94ce563b2",
      title: "My name is someone",
      description: "My name is Abdullah Junaid MotiWala",
      tags: "name",
      time: "2022-01-09T15:45:20.373Z",
      __v: 0
    },
    {
      _id: "61db0327274527889dcc4c2d",
      user: "61d5fe7bcf8885f94ce563b2",
      title: "My name is someone",
      description: "My name is Abdullah Junaid MotiWala",
      tags: "name",
      time: "2022-01-09T15:45:20.373Z",
      __v: 0
    },
    {
      _id: "61db0327274527889dcc4c2d",
      user: "61d5fe7bcf8885f94ce563b2",
      title: "My name is someone",
      description: "My name is Abdullah Junaid MotiWala",
      tags: "name",
      time: "2022-01-09T15:45:20.373Z",
      __v: 0
    }
  ];
  const [curNotes, setCurNotes] = useState(notes);

  //addingNote
  const addNotes = (noteAdd) => {
    const {title,description,tags} = noteAdd
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
    setCurNotes(notes.concat(note));
  };


  return (
    <NoteContext.Provider value={{ curNotes, addNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
