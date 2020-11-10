import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "components/Product";
import Message from "components/Message";
import Loader from "components/Loader";
import Paginate from "components/Paginate";
// import ProductCarousel from "components/ProductCarousel";
import Meta from "components/Meta";
import { listProducts } from "redux/actions";
import { RootReducer } from 'redux/store';
import shortid from 'shortid';

const LandingPage = ({ match }: any) => {
  const keyword = match.params.keyword;

  // const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state: RootReducer) => state.products.productList);
  const { processing, message, data,
    //  page, pages 
  } = productList;

  console.log(message)
  // useEffect(() => {
  //   dispatch(listProducts(keyword, pageNumber));
  // }, [dispatch, keyword, pageNumber]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Meta />
      {!keyword ? (
        // <ProductCarousel />
        <div>This is the product carouse</div>
      ) : (
          <Link to="/" className="btn btn-light">
            Go Back
          </Link>
        )}
      <h1>Latest Products</h1>
      {processing ? (
        <Loader />
      ) : message ? (
        <Message variant="danger">{message}</Message>
      ) : (
            <>
              <Row>
                {data?.products?.map((product) => (
                  <Col key={shortid.generate()} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              {/* <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ""}
              /> */}
            </>
          )}
    </>
  );
};

export default LandingPage;
