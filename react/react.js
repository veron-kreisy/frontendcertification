// react is an Open Source view library 
// It's a great tool to render the User Interface (UI) of modern web applications.

const { Component } = require("react");

// ReactDOM.render(JSX, document.getElementById('root'))



// const JSX = <h1>Hello JSX!</h1>;
 
// const JSX =<div>
//     <h1></h1>
//     <p></p>
//     <ul>
//     <li></li>
//     <li></li>
//     <li></li>
// </ul>
    
// </div>



// adding comments {/* */}
// react rendering api known as react DOM

// ReactDOM.render(componentToRender, targetNode)
// component you want to render and DOM node ypu want to render to
ReactDOM.render (JSX,document.getElementById('challenge-node'));
const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );
//   stateless functional element
// creating a react component using javascript function
// stateless functional Component should start with caps
const DemoComponent = function() {
    return (
      <div className='customClass' />
    );
  };
//   ES6 class 
// constructor The constructor is a special method used during the initialization of objects that are created with the class keyword.
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
     
        return (
          <div>
        <h1>Hello React!</h1>
        </div>
      ); 
    }
  };
//  Create a Component with Composition

return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
// ) inside the render method

// using react to render nested component
// component composition
// When you work with React, it is important to start thinking about your user interface in terms of components


// Render a Class Component to the DOM

// none of the React code you write will render to the DOM without making a call to the ReactDOM API.
// ReactDOM.render(componentToRender, targetNode)

// jsx elements is the above one while react elements is below
// ReactDOM.render(<ComponentToRender />, targetNode)

// Render a Class Component to the DOM
 
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
  <Fruits />
          <Vegetables />
          {/* Change code above this line */}
        </div>
      );
    }
  };
  
  // Change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

// react components from scratch 

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
     
        return (
          <div>
        <h1>My First React Component!</h1>
        </div>
      ); 
    }
}
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));


//  pass props to a stateless functional component
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
// work your react here


//   chatgpt example
// CurrentDate component
const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date}</p>
      </div>
    );
  };
  
  // Calendar component rendering CurrentDate with current date as a prop
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div>
          <h1>My Calendar</h1>
          <CurrentDate date={new Date()} />
        </div>
      );
    }
  }
  
  // Render Calendar component to the DOM
  ReactDOM.render(<Calendar />, document.getElementById('challenge-node'));














