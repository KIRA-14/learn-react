// var h1Element = document.createElement("h1");
// h1Element.innerHTML = "Hello World From JS";

// var rootElement  = document.getElementById('root');
// rootElement.appendChild(h1Element);




// const hedder = React.createElement('h1',{id: "heading"},"Hello world from react")

import React from "react";
import ReactDOM  from "react-dom/client";

const newElementForRender = React.createElement(
    'div',
    { id: 'parent' },
    [
        React.createElement('div', { id: 'chield' },
            [
                React.createElement('h1', {}, 'Hi im a H1 Tag'),
                React.createElement('h2', {}, 'Hi im a H2 Tag')
            ]),
        React.createElement('div', { id: 'chield' },
            [
                React.createElement('h1', {}, 'Hi im a H1 Tag'),
                React.createElement('h2', {}, 'Hi im a H2 Tag')
            ])
    ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newElementForRender);