import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        // Don't set it to true otherwise it will stay true
        // toggle it instead using ! to set whatever the opposite is
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  // Delete Todo
  deleteTodo = (id) => {
    // Created a copy using the spread operator and filters it to show todos !== from id
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Header />
        
        <Todos 
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
