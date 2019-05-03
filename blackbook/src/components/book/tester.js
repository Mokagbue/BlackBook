// import React, {Component} from 'react'
// import axios from 'axios';
// import FlippingPages from 'flipping-pages'
// /* IMPORTANT */
// import 'flipping-pages/FlippingPages.css'
 
// import '../../App.css'
 
// class  Tester extends Component {
 
//     constructor(props) {
//         super(props)
//         this.totalPages = 4
//         this.state = {
//             selected: 0,
//             note: {
//                 id: "",
//                 notes_title: "",
//                 notes_content: "",
//             }
//         }
//         this.handleSelectedChange = this.handleSelectedChange.bind(this)
//         this.previous = this.previous.bind(this)
//         this.next = this.next.bind(this)
//     }

//     componentDidMount() {
//         const noteId = this.props.match.params.id;
//         this.grabById(noteId)
//     }
//     grabById = (id) => {
//         axios.get(`http://localhost:8000/api/notes/${id}`)
//         .then(response => {
//             const note = {
//                 id: response.data.id,
//                 notes_title: response.data.notes_title,
//                 notes_content: response.data.notes_content
//             }
//             this.setState({
//                 ...this.state.note,
//                 note: note
//             })
//         })
//         .catch(error => console.log(error));
//     }
//     deleteButton = () => {
//         const id = this.props.match.params.id;
//         this.props.history.push(`/deleteNote/${id}`)
//     }
//     updateButton = () => {
//         const id = this.props.match.params.id;
//         this.props.history.push(`/updateNote/${id}`)
//     }
 
//     handleSelectedChange(selected) {
//         this.setState({selected})
//     }
 
//     previous() {
//         this.setState(state => ({
//             selected: state.selected - 1
//         }))
//     }
 
//     next() {
//         this.setState(state => ({
//             selected: state.selected + 1
//         }))
//     }
 
//     render() {
//         return (
//             <div className="App">
//                 <FlippingPages
//                     className="App-pages"
//                     direction="horizontal"
//                     selected={this.state.selected}
//                     onSelectedChange={this.handleSelectedChange}
//                     /* touch-action attribute is required by pointer events
//                     polyfill */
//                     touch-action="none"
//                 >
//                     <div className="App-page App-page_red">
//                         <div className="note-box">
//                             <div className="a-note">
//                                 <h1 className="note-title">{this.state.note.notes_title}</h1>
//                                 <p className="note-content">{this.state.note.notes_content}</p>
//                                 <div className="note-buttonwrap">
//                                     <div className="note-buttons" onClick={() => this.deleteButton()}>Delete Note?</div>
//                                     <div className="note-buttons" onClick={() => this.updateButton()}>Update Note?</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="App-page App-page_green">1</div>
//                     <div className="App-page App-page_blue">2</div>
//                     <div className="App-page App-page_orange">3</div>
//                 </FlippingPages>
//                 {/* Buttons are required for keyboard navigation */}
//                 <button
//                     onClick={this.previous}
//                     disabled={!this.state.selected}
//                 >Previous</button>
//                 <button
//                     onClick={this.next}
//                     disabled={this.state.selected + 1 === this.totalPages}
//                 >Next</button>
//             </div>
//         )
//     }
 
// }
 
// export default Tester;