import React from 'react';
import ReactDOM from 'react-dom';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>My Netflix Pick</h1>
    <p>List of 5 Best Series:</p>
    <ol>
      <li>The Witcher</li>
      <li>Friends</li>
      <li>Two and half men</li> 
      <li>Suits</li>
      <li>Fauda</li>
    </ol>

    <h1>Hello, My name is Shubham</h1>
    <p>{`Todays date is ${currDate}`}</p>
    <p>{`Current time is ${currTime}`}</p>
  </>,
  document.getElementById('root')
);
