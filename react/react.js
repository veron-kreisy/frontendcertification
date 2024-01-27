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








 













