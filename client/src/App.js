import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppNavbar from "./components/navbar";
import ShoppingList from "./components/shoppingList";
import AddItem from "./components/itemModal";

function App() {
  return (
    <div className="App">
      <AddItem />
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
