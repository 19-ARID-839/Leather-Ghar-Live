import React from "react";
import "./Catalog.css";
import Product from "./ProductApi";
import { Container, Card, Form } from "react-bootstrap";

function ncard(val) {
  return (
    <div className="col-12 col-md-6 col-lg-4 ">
      {/* style={{ height: '90%' }} */}
      {/* style={{width:"61",height:"408"}} */}
      <Card className="card">
        <Card.Img variant="top" className=" img-fluid imgsd thumbnail "  src={val.image}  />
        <Card.Body>
          <Card.Text>
            {val.name}
            <h3>{val.price}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
const Catalog = () => {
  return (
    <Container className="large">
    
      <div className="top-divison">
        <h5> Home&gt;Products</h5>
        <hr />
      </div>
      {/*  */}

      <div className="row fg">
        <div className="col-2">
          <Container className="d-none d-lg-block ">
            <div className="divison-1">
              {" "}
              <h6>SHOP BY</h6>
            </div>
            <a href="">All</a>
            <a href="">Peshawari Chappal</a>
            <a href="">Zalmi chappal</a>
          </Container>
          
        </div>
        <div className="col-10">
          <div className="main_2">
            <div className="row">
              <div className="title-main col-lg-6 col-md-6 col-sm-12">
                <h3>Products</h3>
              </div>
              <div className="Sub-Title col-lg-6 col-md-6 col-sm-12">
                <h5 className="S" >Sort </h5>
                <Form>
                  <div class="form-group">
                    <select class="form-control" aria-describedby="ally-refresg-page-message" id="exampleFormControlSelect1">
                      <option>Alphabetically,A-Z &#8595;</option>
                      <option>Featured &#8595;</option>
                      <option>Best Selling &#8595;</option>
                      <option>Alphabetically,A-Z &#8595;</option>
                      <option>Price,High to Low &#8595;</option>
                      <option>Price,Low to High &#8595;</option>
                    </select>
                  </div>
                </Form>
              {/* <ButtonGroup aria-label="Basic example">
                <Button variant="Light">GridView </Button>
                <Button variant="light">ListView</Button>
              </ButtonGroup> */}
              </div>
            </div>
            <div className="row product">{Product.map(ncard)}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Catalog;
