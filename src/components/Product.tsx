import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { convertParamsToString } from 'helpers';
import { PRODUCT_DETAIL } from 'pages/pagesPath';

const Product = ({ product }: any) => {

  const prodPath = convertParamsToString(PRODUCT_DETAIL, { id: product._id })

  console.log('prodPath:', prodPath)

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={prodPath}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={prodPath}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
