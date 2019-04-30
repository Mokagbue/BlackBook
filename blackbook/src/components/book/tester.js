import React, { Component } from 'react';


class Tester extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         note: {
    //             id: "",
    //             notes_title: "",
    //             notes_content: "",
    //         }
    //     }
    // }
    // componentDidMount() {
    //     const noteId = this.props.match.params.id;
    //     this.grabById(noteId)
    // }
    // grabById = (id) => {
    //     axios.get(`http://localhost:8000/api/notes/${id}`)
    //     .then(response => {
    //         const note = {
    //             id: response.data.id,
    //             notes_title: response.data.notes_title,
    //             notes_content: response.data.notes_content
    //         }
    //         this.setState({
    //             ...this.state.note,
    //             note: note
    //         })
    //     })
    //     .catch(error => console.log(error));
    // }
    // deleteButton = () => {
    //     const id = this.props.match.params.id;
    //     this.props.history.push(`/deleteNote/${id}`)
    // }
    // updateButton = () => {
    //     const id = this.props.match.params.id;
    //     this.props.history.push(`/updateNote/${id}`)
    // }
    
    
    render() {
        return (
            <div id="mybook">
                <div>
                    <h3>Yay, Page 1!</h3>
                </div>
                <div>
                    <h3>Yay, Page 2!</h3>
                </div>
                <div>
                    <h3>Yay, Page 3!</h3>
                </div>
                <div>
                    <h3>Yay, Page 4!</h3>
                </div>
            </div>
        )
    }
}
export default Tester;