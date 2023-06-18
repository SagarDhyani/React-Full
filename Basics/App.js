const heading2 =  React.createElement("h2", {id: "heading2"}, "Hello From React2")

console.log({heading2}) //object

//React needs a root to do dom manipulation
const root1 = ReactDOM.createRoot(document.getElementById("root1")) //all code render inside this root
root1.render(heading2)  //take the object and convert it to h2 tag and put it on dom
