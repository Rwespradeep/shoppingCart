import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Rating from "./Rating";

const Filter = () => {
  const [rate, setRate] = useState(3);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <Form.Check className="filterItem" type="radio" label="Ascending" />
      <Form.Check className="filterItem" type="radio" label="Descending" />
      <Form.Check
        className="filterItem"
        type="checkbox"
        label="Fast Delivery Only"
      />
      <Form.Check
        className="filterItem"
        type="checkbox"
        label="Include Out of Stock"
      />
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          className="rating"
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button className="clear-filter-btn" variant="light">
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
