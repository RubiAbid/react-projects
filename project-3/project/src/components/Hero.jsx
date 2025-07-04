import React, { useState } from 'react';
import '../App.css';

const Hero = () => {
  const [input, setInput] = useState("");
  const [inputNote, setInputnote] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <div className='Hero'>
      {notes.length === 0
        ? <h3>Empty</h3>
        : <h3>Showing {notes.length} Notes in Database</h3>
      }

      <div className='input-field'>
        <input
          type="text"
          value={input}
          placeholder='Title'
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <input
          type="text"
          value={inputNote}
          placeholder='Take a note...'
          onChange={(e) => {
            setInputnote(e.target.value);
          }}
        />

        <div className='mainbtn'>
          <button
            className='btn'
            onClick={() => {
              if (input.trim() === "" && inputNote.trim() === "") return;

              setNotes([
                ...notes,
                { title: input, note: inputNote }
              ]);

              setInput("");
              setInputnote("");
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="boxes-container">
        {notes.map((n, index) => (
          <div key={index} className="box">
            <h4>{n.title}</h4>
            <p>{n.note}</p>

            <button className='del' onClick={() => {
              setNotes(notes.filter((_, i) => i !== index));
            }}>
              <img src="icons8-delete-button.svg" alt="delete" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
