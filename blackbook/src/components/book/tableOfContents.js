import React from 'react';
import { Link } from 'react-router-dom';

function TBContents(props) {
    return (
        <div className="tbcBox">
            <h1 className="tbc-title">Table of Contents</h1>
            <div className="note-wrap">
                    {props.notes.map((note, index) => (
                        <div key={index} className="note-card">
                            <Link to={`/notes/${note.id}`}>
                                <h3 className="note-title">{note.notes_title}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
        </div>
    );
}
export default TBContents;