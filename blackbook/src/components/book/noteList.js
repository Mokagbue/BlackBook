import React from 'react';
import { Link } from 'react-router-dom';

function NotesList(props) {
    return (
        <div className="list-wrap">
            <h1 className="home-title">My Notes!</h1>
            <div className="page-box">
                <div className="note-wrap">
                    {props.notes.map((note, index) => (
                        <div key={index} className="note-card">
                            <Link to={`/notes/${note.id}`}>
                                <h3 className="note-title">{note.notes_title}</h3>
                            </Link>
                            <p className="note-content">{note.notes_content}</p>
                        </div>
                    ))}
                </div>
                <div className="note-wrap">
                    {props.notes.map((note, index) => (
                        <div key={index} className="note-card">
                            <Link to={`/notes/${note.id}`}>
                                <h3 className="note-title">{note.notes_title}</h3>
                            </Link>
                            <p className="note-content">{note.notes_content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default NotesList;