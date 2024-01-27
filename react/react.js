// react is an Open Source view library 
// It's a great tool to render the User Interface (UI) of modern web applications.

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
const MyComponent = () => {
    return (
      <div>
        <p>This is some text inside a div element.</p>
      </div>
    );
  };
  class Kitten extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <h1>Hi</h1>
      );
    }
  }
  return (
    <App>
     <Navbar />
     <Dashboard />
     <Footer />
    </App>
   )
   const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
  
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };

 













