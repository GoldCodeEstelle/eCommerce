import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 image p-4 border-0 ">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title class="card-name tfont-weight-bold text-center">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text class="text-center">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
