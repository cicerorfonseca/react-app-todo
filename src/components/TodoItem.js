import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    // Destructuring
    const { id, title } = this.props.todo;

    return (
      // Inline Styles
      // <div style={{ backgroundColor: '#f4f4f4'}}>

      // Using constant itemStyle 
      // <div style={ itemStyle }>

      // Using getStyle method
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          {this.props.todo.title}
          <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

// Define Property Types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: 'yellow'
}

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
