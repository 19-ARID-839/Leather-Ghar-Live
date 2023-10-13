import React from "react";
import { Form,Button } from "react-bootstrap";

const addToCart=()=>{
  
  <>
  alert('Hello');
    <div className="click container">
    e.preventDefault();
     <h3>Shoppping Cart</h3>
    </div>
    
  </>
  

}

const Product1 = (props) => {
  return (
    <div className="container ">
      <div className="row">
        {/*  First Coloumn of the main Row */}
        <div className="col-lg-5 col-md-6 col-sm-12  main-product-1 container container-fluid">
          <div className="main-product-1-part1">
            <div className="lazyload__image-wrapper"></div>
            <img
              src={props.img}
              class="img-fluid imgsd"
              alt="Responsive image"
              // height="200px"
            />
          </div>
        </div>
        {/*  */}
        <div className="col-lg-7 col-md-6  col-sm-12 ">
          <div className="main-product-1-part2">
            <div className="product-1-title">
              <h4>
                {props.name}
              </h4>
            </div>
            <div className="product-1-price">
              <h6>{props.price}</h6>
            </div>
            <div className="product-1-size">
              <p>Size</p>
            </div>
            <Form >
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select Your Size</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>39/6</option>
                  <option>40/7</option>
                  <option>41/8</option>
                  <option>42/9</option>
                  <option>43/10</option>
                </select>
              </div>
            </Form>
            <div className="cart">
            <Button  variant="outline-info" size="sm"  onClick={addToCart}>ADD TO CART</Button>{' '}
            <Button className="adv" variant="primary" size="sm">Buy Now</Button>{' '}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
    
  );
};

export default Product1;
