import React from 'react'
export default (props) => (
    <li onClick={props.toggleComplete}>
        <input type="checkbox" id={`${props.todo.id}`} checked={props.todo.complete}

        />
        <label style={{
            textDecoration: props.todo.complete ? 'line-through' : ""
        }} >{props.todo.text}</label></li>
)