import React, { useState, useEffect,useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import ScrollToTop from "react-scroll-to-top";

import "../assets/css/bootstrap.min.css";
import { useSearchParams } from "react-router-dom";

function ShopScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const [category,setCategory] = useState('');
  const { error, loading, products } = productList;
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <Header />
      <section id="page-header">
        <h2>#Stayhome</h2>
        <p>Save more with coupons & upto 70% off!</p>
      </section>
      <Container fluid className="mt-4">
        <SearchBox></SearchBox>
        <select className="input-month" style={{width:'180px',marginLeft:'130px',borderRadius:'10px'}} 
        onChange = {(e)=>{setCategory(e.target.value)}}>
                <option selected disabled>Categories</option>
                <option value="Pant">Pant</option>
                <option value="Shirt">Shirt</option>
                <option value="Blazer">Blazer</option>
                <option value="Dress">Dress</option>
                <option value="Shoe">Shoe</option>
                <option value="Jean">Jean</option>
                <option value="ALL">All</option>
       </select>
      </Container>
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            <section id="product1" className="section-p1 widthlength">
              <div className="pro-container">
                {products.map((product) => {
                  if(category === ''){
                  return (<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>)
                  } else if(category === 'ALL'){
                  return (<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>)
                }
                else {
                  if(product.category === category){
                    return (<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>)
                  }
                }
                })}
               
              </div>
            </section>
          </Row>
        )}
      </div>
      <Footer />
      <ScrollToTop smooth />
    </div>
  );
}

export default ShopScreen;
