import React, { useState, useEffect } from 'react';

import './App.css';
import NotesList from './Components/NotesList';
import NotesCreate from './Components/NotesCreate';

const App = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);
    const saveNotesToLocalStorage = (notes) => {
        localStorage.setItem('notes', JSON.stringify(notes));
    };
    const addNote = (note) => {
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        saveNotesToLocalStorage(updatedNotes);
    };
    const updateNote = (id, updatedNote) => {
        const updatedNotes = notes.map(note => note.id === id ? updatedNote : note);
        setNotes(updatedNotes);
        saveNotesToLocalStorage(updatedNotes);
    };
    const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        saveNotesToLocalStorage(updatedNotes);
    };
    return (
        <div className="app">
            <h1>Note Taking App</h1>
            <NotesCreate addNote={addNote} notes={notes} />
            <NotesList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
        </div>
    );
};
export default App;