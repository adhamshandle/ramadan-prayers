import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import TodoForm from './todoform'
import Todo from './todo'
import './todo.css'
import { Button } from 'react-bootstrap'
class TodoList extends Component {
    state = {
        todos: [],
        todosToShow: 'all',
        toggleAllComplete: true
    }
    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                else {
                    return todo
                }
            })
        })
    }
    componentDidMount() {

    }
    updateTodoToShow = (string) => {
        this.setState({ todosToShow: string })
    }
    render() {
        let todos = [];

        if (this.state.todosToShow === 'all') {
            todos = this.state.todos;
        }

        else if (this.state.todosToShow === 'active') {
            todos = this.state.todos.filter(x => !x.complete);
        }
        else if (this.state.todosToShow === 'complete') {
            todos = this.state.todos.filter(x => x.complete);
        }
        return (
            <div class="wrap-list">
                <TodoForm onSubmit={this.addTodo} />
                <div >
                    <ol class="list">
                        {todos.map(todo => (
                            <Todo toggleComplete={() => this.toggleComplete(todo.id)}
                                key={todo.id}
                                todo={todo} />
                        ))}
                    </ol>
                </div>
                <div style={{marginBottom:'2%',marginTop:'4%'}}>todos left : {this.state.todos.filter(x => !x.complete).length}</div>
                <div>
                    <Button  variant="warning" onClick={() => this.updateTodoToShow("all")}>all</Button> 
                    <Button  variant="warning" onClick={() => this.updateTodoToShow("active")} >active</Button> 
                    <Button  variant="warning" onClick={() => this.updateTodoToShow("complete")}>complete</Button>
                    <Button
 variant="warning"                         onClick={() =>
                            this.setState({
                                todos: this.state.todos.map(todo => ({
                                    ...todo,
                                    complete: this.state.toggleAllComplete
                                })),
                                toggleAllComplete: !this.state.toggleAllComplete
                            })}
                    >
                        toggle all complete : {`${this.state.toggleAllComplete}`}
                    </Button> 
                </div>
            </div>
        )
    }
}
export default TodoList;