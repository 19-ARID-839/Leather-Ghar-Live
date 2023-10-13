import React from "react";
import {Button,Form} from 'react-bootstrap'

const Product2 = () => {
  return (
   
    <div className="main-product-2 container container-fluid ">
    <div className="main-product-2-part1">
      <div className="product-2-title">
        <h1>DARK MUSTARD ZALMI CHAPPAL</h1>
      </div>
      <div className="product-2-description">
        <p>
          his Peshawari Chappal unique design is handmade of genuine cow
          leather, hand stitched by the experienced craftsmen of Peshawar. The
          sole is made of tyre rubber with leather on the upper side of the
          sole. Stitched with fine thread with due care and given best finishing
          for customers who value quality.
        </p>
      </div>
      <Form>
      <div className="product-2-button">
      <Button className="adv" variant="primary" size="sm">Buy Now</Button>{' '}
      </div>
      </Form>
      </div>
      <div className="main-product-2-part2">
      <div className="lazyload__image-wrapper"></div>
      <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="img-fluid" alt="Responsive image" height="auto" />
      </div>
      <hr />
    </div>
    
    
  );
};

export default Product2;
