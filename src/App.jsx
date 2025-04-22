// App.jsx
import React from "react";
import ListBlog from "./components/ListBlog";
import "./App.css";
import AddBlog from "./components/AddBlog";

function App() {
  return (
    <div className="App">
      <AddBlog/>
      <ListBlog/>
    </div>
  );
}

export default App;
