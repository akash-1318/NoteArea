import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

export default function NoteArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    // setNote({
    //   title: "",
    //   content: ""
    // });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input name="title" onChange={handleChange} placeholder="Title"></input>
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
        ></textarea>
        <button onClick={handleClick}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}
