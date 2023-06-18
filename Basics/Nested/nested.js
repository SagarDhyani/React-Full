// create nested element like

{
  /* <div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Iam h1 tag")
  )
);

console.log({parent})

const root4 = ReactDOM.createRoot(document.getElementById("nested"));

root4.render(parent);

// create nested with siblings element like

{
    /* <div id="parent">
    <div id="child">
      <h1>I am h1 tag</h1>
      <h2>I am h2 tag</h2>
    </div>
  </div>; */
  }

  const parent1 = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "Iam h1 tag"), 
    React.createElement("h2", {}, "Iam h2 tag")
  ]))

  const root5 = ReactDOM.createRoot(document.getElementById("siblings"))

  root5.render(parent1)
