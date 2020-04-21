import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import shortid from 'shortid'
import { Button } from 'react-bootstrap'
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
            <form style={{marginTop:'3%'}} onSubmit={this.handleSubmit}>
                <input placeholder="todo..."
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.text} />
                    <Button style={{textAlign:'center', fontSize:'12px',marginLeft:'2%',fontWeight:'bold',textTransform:'capitalize'}} variant="success" onClick={this.handleSubmit}>add todo</Button>
            </form>
        )
    }
}
export default TodoForm;