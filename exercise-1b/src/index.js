import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; */

const Header = (props) => {
    return(
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Content = (props) => {
    return(
        <div>
            <Part part = {props.course.parts[0].name} exercise = {props.course.parts[0].exercises} />
            <Part part = {props.course.parts[1].name} exercise = {props.course.parts[1].exercises} />
            <Part part = {props.course.parts[2].name} exercise = {props.course.parts[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    return(
        <div>
            <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
        </div>
    )
}

const App = () => {
    console.log('Hello, you are in the App')
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course = {course} />
            <Content course = {course} />
            <Total course = {course} />
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */
