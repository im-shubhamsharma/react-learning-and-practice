// ReactDOM.render(<p>Hello my name is shubham</p>, document.getElementById("root"))

// ReactDOM.render(
//   <ul>
//     <li>shubham</li>
//     <li>sharma</li>
//   </ul>,
//   document.getElementById("root")
// );

// function MainContent() {
//   return (
//     <div>
//       <h1> Hello everyone</h1>
//       <h2> My name is shubham</h2>
//       <h3> I am learning react and I am loving it so far</h3>
//     </div>
//   )
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);

// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );

// ReactDOM.render(page, document.getElementById("root"));

/*
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const navbar = (
//     <nav>
//         <h1>My Website</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(navbar,document.getElementById("root"))

//new update afet react 18 we need to create root element and then use render method
// const h1  = ( <h1> Hello everyone! </h1> );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);

// ReactDOM.createRoot(document.getElementById("root")).render(h1);



/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const samplePage = (
  <div>
    <h1>This is sample heading 1</h1>
    <h2>This is sample heading 2</h2>
    <h3>This is sample heading 3</h3>
    <p>This is sample paragraph</p>
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
    </ul>
  </div>
);

// document.getElementById("root").append(JSON.stringify(samplePage));


/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

// import React from "react"
// import ReactDOM from "react-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(samplePage)
