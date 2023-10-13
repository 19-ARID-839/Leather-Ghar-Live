import React from "react";
import Slider from './Slider';
import Product2 from "./Product2";
import Product1 from "./Product1";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      
      
      <Slider />
      <Product1
        name={
          "DOUBLE SOLE NAVI BLUE ZALMI PESHAWAR CHAPPAL LEATHER HANDMADE M-004"
        }
        price={"RS.3,999.00"}
        img={
          "https://images.unsplash.com/photo-1612015670817-0127d21628d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        }
      />

      <Product2 />
      <Product1
        name={
          "DOUBLE SOLE BROWN ZALMI PESHAWAR CHAPPAL PURE LEATHER HANDMADE M-007"
        }
        price={"RS.3,999.00"}
        img={
          "https://images.unsplash.com/photo-1610856643814-e2d609b10656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
        }
      />
      
    </div>
  );
};

export default Home;
