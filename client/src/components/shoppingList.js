import React, { useState } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

const shoppingList = () => {
  const [items, setItems] = useState([
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Water" }
  ]);

  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          const name = prompt("Enter Item");
        }}
      ></Button>
    </Container>
  );
};
export default shoppingList;
