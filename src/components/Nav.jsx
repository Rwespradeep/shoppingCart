import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FiShoppingCart } from "react-icons/fi";
import "../App.css";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const Nav = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="Nav-container">
          <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
          <Form>
            <Navbar.Text>
              <Form.Control
                style={{ width: 500 }}
                placeholder="Search products"
                className="m-auto"
              />
            </Navbar.Text>
          </Form>
          <Dropdown className="m-4" align="end">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FiShoppingCart
                color="white"
                fontSize="25px"
                style={{ padding: 2 }}
              />
              {cart.length}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 320 }}>
              {cart.length === 0 ? (
                <span className="cart-empty" style={{ padding: 10 }}>
                  Cart is empty
                </span>
              ) : (
                <>
                  {cart.map((item) => (
                    <div className="cart-header">
                      <span style={{ padding: 10 }} className="inside-cart">
                        {item.name}
                      </span>
                      <span className="cart-price">
                        Rs. {item.price.split(".")[0]}
                      </span>
                      <span>
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
                      </span>
                    </div>
                  ))}
                </>
              )}
              <Link to="/cart">
                <button
                  className="cartpage-button"
                  style={{ width: "95%", margin: "0 10px" }}
                >
                  Go To Cart
                </button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
