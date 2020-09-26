import React from 'react'

function About() {
    return (
        // It is not displayed in the dom
        // however we need it for the jsx
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0. It is part of a React Crash Course.</p>
        </React.Fragment>
    )
}

export default About;