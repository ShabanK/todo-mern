import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
const axios = require("axios");

const ShoppingList = props => {
  const [items, setItems] = useState([]);

  // const fetching = async () => {
  //   try {
  //     await axios.get("http://localhost:5000/api/items").then(items => {
  //       const arr = items.data.map(listitem => ({
  //         id: listitem._id,
  //         name: listitem.name
  //       }));
  //       setItems(arr);
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // fetching();

  useEffect(() => {
    const fetcher = async () => {
      try {
        await axios.get("http://localhost:5000/api/items").then(items => {
          const arr = items.data.map(listitem => ({
            id: listitem._id,
            name: listitem.name
          }));
          setItems(arr);
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetcher();
  }, []);

  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          const name = prompt("Enter Item");
          if (name) {
            setItems([...items, { id: uuid(), name: name }]);
          }
        }}
      >
        Add Item
      </Button>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  onClick={() => {
                    setItems(items.filter(item => item.id !== id));
                  }}
                  color="danger"
                  size="sm"
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};
export default ShoppingList;
