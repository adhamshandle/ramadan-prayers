import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import shortid from 'shortid'
class TodoForm extends Component {
    state = {
        text: ""
    }
    componentDidMount() {

    }
    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props,"EJEHEHEH")
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({text:""})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="todo..."
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.text} />
                    <button onClick={this.handleSubmit}>add todo</button>
            </form>
        )
    }
}
export default TodoForm;