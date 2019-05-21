import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/book/home.js';
import Note from './components/book/note.js';
import NotesList from './components/book/noteList.js';
import NoteDeleteForm from './components/book/noteDelete.js';
import NotesForm from './components/book/noteForm.js';
import NoteUpdateForm from './components/book/noteUpdate.js';
import Tester2 from './components/book/tester2.js';
import TBContents from './components/book/tableOfContents.js'; 


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    console.log("--getting Books--", this.state);
    axios.get('http://localhost:8000/api/books')
    .then(response => this.setState({ ...this.state, books: response.data }))
    .catch(error => console.log(error, "failed to grab all books"));
  }

  addBooks = (book) => {
    axios.post('http://localhost:8000/api/books', book)
    .then(response => this.addbooks())
    .catch(error => console.log({ message:"failed to make new book", error}));
  }

  deleteBooks = (id) => {
    axios.delete(`http://localhost:8000/api/books/${id}`)
    .then(response => this.getBooks())
    .catch(error => console.log({ message:"failed to delete book", error}));
  }

  editBooks = (id, editBooks) => {
    axios.put(`http://localhost:8000/api/books/${id}`, editBooks)
    .then(response => this.getBooks())
    .catch(error => console.log({ message:"failed to update book", error}));
  }


  render() {
    return (
      <div className="App">
        <div className="navigation-box">
          <nav className="nav">
            <NavLink exact to="/" className="navigation-buttons"> Home</NavLink>
            <NavLink exact to="/notes" className="navigation-buttons">Pages</NavLink>
            <NavLink  to="/newNotes" className="navigation-buttons">New Page</NavLink>
            <NavLink  to="/tester" className="navigation-buttons">Tester2</NavLink>
            <NavLink  to="/tbcontent" className="navigation-buttons">Table of Contents</NavLink>
          </nav>
        </div>
          <main>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/notes" render={(props) =>
              (<NotesList {...props} notes={this.state.notes} />)} />
            <Route path="/newNotes" render={(props) =>
              (<NotesForm {...props} makeNewNote={this.makeNewNote} />)} />  
            <Route path="/notes/:id" render={(props) =>
              (<Note {...props} />)} />
            <Route path="/deleteNote/:id" render={(props) =>
              (<NoteDeleteForm {...props} deleteNote={this.deleteNote} />)} />
            <Route path="/updateNote/:id" render={(props) =>
              (<NoteUpdateForm {...props} updateNote={this.updateNote} />)} />
            <Route path="/tester" render={(props) =>
              (<Tester2 {...props}  />)} />
            <Route path="/tbcontent" render={(props) =>
              (<TBContents {...props} books={this.state.books} />)} />
          </main>
      </div>
    );
  }
}

export default App;
