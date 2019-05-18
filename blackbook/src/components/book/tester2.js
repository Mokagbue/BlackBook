import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import FlippingPages from 'flipping-pages'
/* IMPORTANT */
import 'flipping-pages/FlippingPages.css'
 
import '../../App.css'
 
class  Tester2 extends Component {
 
    constructor(props) {
        super(props)
        this.totalPages = 4
        this.state = {
            selected: 0,
            notes: [],
        }
        this.handleSelectedChange = this.handleSelectedChange.bind(this)
        this.previous = this.previous.bind(this)
        this.next = this.next.bind(this)
    }
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


    handleSelectedChange(selected) {
        this.setState({selected})
    }
 
    previous() {
        this.setState(state => ({
            selected: state.selected - 1
        }))
    }
 
    next() {
        this.setState(state => ({
            selected: state.selected + 1
        }))
    }
 
    render() {
        return (
            <div className="App">
                <FlippingPages
                    className="App-pages"
                    direction="horizontal"
                    selected={this.state.selected}
                    onSelectedChange={this.handleSelectedChange}
                    /* touch-action attribute is required by pointer events
                    polyfill */
                    touch-action="none"
                >
                    <div className="App-page App-page_red">
                        <div className="note-wrap">
                            {this.state.notes.map((note, index) => (
                                <div key={index} className="note-card">
                                    <Link to={`/notes/${note.id}`}>
                                        <h3 className="note-title">{note.notes_title}</h3>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="App-page App-page_green">1</div>
                    <div className="App-page App-page_blue">2</div>
                    <div className="App-page App-page_orange">3</div>
                </FlippingPages>
                {/* Buttons are required for keyboard navigation */}
                {/* Need to add next function so going to the next page goes to the next note*/}
                <button
                    onClick={this.previous}
                    disabled={!this.state.selected}
                >Previous</button>
                <button
                    onClick={this.next}
                    disabled={this.state.selected + 1 === this.totalPages}
                >Next</button>
            </div>
        )
    }
 
}
 
export default Tester2;