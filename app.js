// var h1Element = document.createElement("h1");


// h1Element.innerHTML = "Hello World From JS";

// var rootElement  = document.getElementById('root');
// rootElement.appendChild(h1Element);




// const hedder = React.createElement('h1',{id: "heading"},"Hello world from react")

import React from "react";
import ReactDOM from "react-dom/client";


const reactElement = <h1 id="text">Im Reacte Code js</h1>

const TitleComponent = () => reactElement;

//
const HeadingComponet = () => {
    return<div>
        <TitleComponent />
        <h1>Hi im Function componengt</h1>
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<HeadingComponet />);

