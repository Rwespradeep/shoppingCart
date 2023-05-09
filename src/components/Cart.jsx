import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import ListGroup from "react-bootstrap/ListGroup";
import Rating from "./Rating";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, settotal] = useState();

  useEffect(() => {
    settotal(
      cart.reduce((accumulator, currentItem) => {
        return accumulator + Math.round(currentItem.price) * currentItem.qty;
      }, 0)
    );
  }, [cart]);

  return (
    <div className="Home-Container">
      <div className="product-container">
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col>
                  <Image src={item.image} fluid rounded />
                </Col>
                <Col>
                  <span>{item.name}</span>
                </Col>
                <Col>{item.price}</Col>
                <Col>
                  <Rating rating={item.ratings} />
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: {
                          id: item.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(item.instock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <AiFillDelete
                    className="delete-icon"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })
                    }
                    style={{ fontSize: "24px" }}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <div className="checkout">
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total: {total} in rs
          </span>
          <button
            className="cartpage-button"
            type="button"
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
