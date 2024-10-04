import React, { useState } from 'react';

const NotesCUD = ({ note, updateNote, deleteNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(note.content);
    const [noteTitle, setNoteTitle] = useState(note.title)
    const handleUpdate = () => {
        updateNote(note.id, { ...note, content: newContent, title: noteTitle });
        setIsEditing(false);
    };

    return (
        <div className="note-item">
            {isEditing ? (
                <div className='noteEdit'>
                    <input
                        type="text"
                        placeholder="Title"
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />
                    <textarea
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                    ></textarea>
                    <button onClick={handleUpdate}>Save</button>
                </div>
            ) : (
                <>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                </>
            )}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel' : 'Edit'}
            </button>
        </div>
    );
};

export default NotesCUD;
