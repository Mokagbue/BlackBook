import React from 'react';
import { Link } from 'react-router-dom';

function TBContents(props) {
    return (
        <div className="tbcBox">
            <h1 className="tbc-title">Table of Contents</h1>
            <div className="book-wrap">
                {this.state.books.map((book, index) => (
                    <div key={index} className="book-card">
                        <Link to={`/books/${book.id}`}>
                            <h3 className="book-title">{book.books_title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TBContents;