import React from 'react';
import NotesCUD from './NotesCUD';

const NotesList = ({ notes, updateNote, deleteNote }) => {
    console.log(notes);

    return (
        <div className="note-list">
            {notes.map(note => (
                <NotesCUD
                    key={note.id}
                    note={note}
                    updateNote={updateNote}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    );
};

export default NotesList;
