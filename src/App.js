import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import NoteArea from "./NoteArea";
import Note from "./Note";
export default function App() {
  const [notes, setNotes] = useState([]);

  function addList(newNote) {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preNotes) => {
      return preNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NoteArea onAdd={addList} />
      {notes.map((addItem, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={addItem.title}
            content={addItem.content}
            onDelete={deleteNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}
