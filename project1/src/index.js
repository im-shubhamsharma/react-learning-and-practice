/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// import React from "react"; //no need to write this after react 18
// import ReactDOM from "react-dom/client";
// import image from "./react-logo.png";

// const page = (
//   <>
//     <img src={image} width="100px" />
//     <h1>Fun Facts about React</h1>
//     <ul>
//       <li>Was First Released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprises apps, including mobile apps </li>
//     </ul>
//   </>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(page);

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page


Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";



function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
