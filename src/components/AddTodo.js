import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // You can use this for as many fields as you want
    // since the input name is the same as the state
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        //To avoid submitting the form
        e.preventDefault();

        // This goes up one level
        this.props.addTodo(this.state.title);

        // Cleans up the input
        this.setState({ title: '' });
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

// Define Property Types
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }

export default AddTodo
