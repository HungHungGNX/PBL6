import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
<<<<<<< HEAD
import Footer from "../components/Footer";

=======
>>>>>>> 9bc161f (update develop)
import "../assets/css/bootstrap.min.css";

function ShopScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
<<<<<<< HEAD
      <section id="page-header">
        <h2>#Stayhome</h2>
        <p>Save more with coupons & upto 70% off!</p>
      </section>

      <div>
=======
      <div>
        <h1 style={{ textAlign: "center", borderRadius: "5px" }}>
          Latest Products
        </h1>
>>>>>>> 9bc161f (update develop)
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
<<<<<<< HEAD
            <section id="product1" className="section-p1">
              <div className="pro-container">
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </div>
            </section>
          </Row>
        )}
      </div>
      <Footer />
=======
          <section id="product1" className="section-p1">
            <div className="pro-container">
              {products.map((product) => (
                <Col key={product._id} sm = {12} md = {6} lg = {4} xl = {3}>
                <Product product={product}/>
                </Col>
              ))}
            </div>
          </section>
          </Row>
        )}
      </div>
>>>>>>> 9bc161f (update develop)
    </div>
  );
}

export default ShopScreen;
