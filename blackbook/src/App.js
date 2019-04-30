import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/book/home.js';
import Note from './components/book/note.js';
import NotesList from './components/book/noteList.js';
import NoteDeleteForm from './components/book/noteDelete.js';
import NotesForm from './components/book/noteForm.js';
import NoteUpdateForm from './components/book/noteUpdate.js';
import Tester from './components/book/tester.js';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }
  };

  componentDidMount() {
    this.grabAllNotes();
  }

  grabAllNotes = () => {
    console.log("getting notes?", this.state);
    axios.get('http://localhost:8000/api/notes')
    .then(response => this.setState({ ...this.state, notes: response.data }))
    .catch(error => console.log(error));
  }

  makeNewNote = (note) => {
    axios.post('http://localhost:8000/api/notes', note)
    .then(response => this.grabAllNotes())
    .catch(error => console.log({ message:"failed to make new note", error}));
  }

  deleteNote = (id) => {
    axios.delete(`http://localhost:8000/api/notes/${id}`)
    .then(response => this.grabAllNotes())
    .catch(error => console.log({ message:"failed to delete note", error}));
  }

  updateNote = (id, updatedNote) => {
    axios.put(`http://localhost:8000/api/notes/${id}`, updatedNote)
    .then(response => this.grabAllNotes())
    .catch(error => console.log({ message:"failed to update note", error}));
  }


  render() {
    return (
      <div className="App">
        <div className="navigation-box">
          <nav className="nav">
            <NavLink exact to="/" className="navigation-buttons"> Home</NavLink>
            <NavLink exact to="/notes" className="navigation-buttons">Pages</NavLink>
            <NavLink  to="/newNotes" className="navigation-buttons">New Page</NavLink>
            <NavLink  to="/tester" className="navigation-buttons">Tester</NavLink>
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
              (<Tester {...props}  />)} />
          </main>
      </div>
    );
  }
}

export default App;
