import React, { Component } from 'react';
import axios from 'axios';

class Pages extends Component {
    constructor() {
        super();
        this.state = {
            pages: {
                id: "",
                authorname: "",
                pages_title: "", 
                pages_content: ""
            }
        }
    }
    componentDidMount() {
        const pageId = this.props.match.params.id;
        this.grabById(pageId)
    }
    grabById = (id) => {
        axios.get(`http://localhost:8000/api/pages/${id}`)
        .then(response => {
            const pages = {
                id: response.data.id,
                authorname: response.data.authorname,
                pages_title: response.data.pages_title,
                pages_content: response.data.pages_content
            }
            this.setState({
                ...this.state.pages,
                pages: pages
            })
        })
        .catch(error => console.log(error, "FAILED TO get pages by id"));
    }
    deleteButton = () => {
        const id = this.props.match.params.id;
        this.props.history.push(`/pages/${id}`)
    }
    updateButton = () => {
        const id = this.props.match.params.id;
        this.props.history.push(`/pages/${id}`)
    }
    
    render() {
        return (
            <div className="note-box">
                <div className="a-note">
                    <h1 className="note-title">{this.state.pages.pages_title}</h1>
                    <p className="note-content">{this.state.pages.pages_content}</p>
                    <div className="note-buttonwrap">
                        <div className="note-buttons" onClick={() => this.deleteButton()}>Delete Page?</div>
                        <div className="note-buttons" onClick={() => this.updateButton()}>Update Page?</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pages;