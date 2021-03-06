import React from 'react';
import { Link } from 'react-router-dom';

function TBContents(props) {
    return (
        <div className="tbcBox">
            <h1 className="tbc-title">Table of Contents</h1>
            <div className="book-wrap">
                {props.books.map((books, id) => (
                    <div key={id} className="book-card">
                        <Link to={`/pages/${books.id}`}>
                            <h3 className="book-title">{books.authorname}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TBContents;

