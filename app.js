// // Creating Hello World Program by using React
// const headingElement = React.createElement("h1",{}, "Hello World by using React");
// const rootElemet = ReactDOM.createRoot(document.getElementById("root02"));
// rootElemet.render(headingElement);

// // Creating Hello World Program by using React with props.
// const headingElement = React.createElement("h1",{id:"heading"}, "Hello World by using React");
// const rootElement = ReactDOM.createRoot(document.getElementById("root02"));
// rootElement.render(headingElement);

// //  Creation of nested element using React
// {/* <div id="parent">
//     <div id="child">
//         <h1> Hello I am a h1 tag</h1>
//     </div>
// </div> */}
// const headingElement = React.createElement(
//     "div",
//     {id:"parent"}, 
//     React.createElement("div",
//      {id:"child"},
//      React.createElement("h1", {}, "Hello I am a h1 tag")));
// const rootElement = ReactDOM.createRoot(document.getElementById("root02"));
// rootElement.render(headingElement);

// //  Creation of nested element with sibling using React
// {/* <div id="parent">
//     <div id="child">
//         <h1 id="heading01"> Hello I am a h1 tag</h1>
//         <h2 id="heading02"> Hello I am a h2 tag</h2>
//     </div>
// </div> */}
// const headingElement = React.createElement(
//     "div",
//     {id:"parent"}, 
//     React.createElement("div",
//      {id:"child"},
//      [React.createElement("h1", {}, "Hello I am a h1 tag"), React.createElement("h1", {}, "Hello I am a h2 tag"),]));
// const rootElement = ReactDOM.createRoot(document.getElementById("root02"));
// rootElement.render(headingElement);

// //  Creation of nested element with nested using React
// {/* <div id="parent">
//     <div id="child01">
//         <h1 id="heading01"> Hello I am a h1 tag</h1>
//         <h2 id="heading02"> Hello I am a h2 tag</h2>
//     </div>
//     <div id="child02">
//         <h1 id="heading01"> Hello I am a h1 tag</h1>
//         <h2 id="heading02"> Hello I am a h2 tag</h2>
//     </div>
// </div> */}
const headingElement = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div", {id:"child01"}, [React.createElement("h1", {}, "Hello I am h1 tag"),React.createElement("h1", {}, "Hello I am h2 tag"),]),
    React.createElement("div", {id:"child02"}, [React.createElement("h1", {}, "Hello I am h1 tag"),React.createElement("h1", {}, "Hello I am h2 tag"),])]
    );
const rootElement = ReactDOM.createRoot(document.getElementById("root02"));
rootElement.render(headingElement);



