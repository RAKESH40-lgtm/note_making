import React, { useState } from 'react';

const NotesCreate = ({ addNote, notes }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    console.log(notes);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) return; // Prevent empty notes
        if (notes.length === 0) {
            const newNote = {
                id: Date.now(),
                title,
                content
            };
            addNote(newNote);
            setTitle('');
            setContent('');
        } else {
           const wanttoAdd=notes.filter((item)=>item.title===title)
           console.log(wanttoAdd);
           if(wanttoAdd.length===0){
            const newNote = {
                id: Date.now(),
                title,
                content
            };
            addNote(newNote);
            setTitle('');
            setContent('');
           }else{
            alert('Note with this title already exists')
           }
           
        }
    };

    return (
        <form onSubmit={handleSubmit} className="note-editor">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            ></textarea>
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NotesCreate;