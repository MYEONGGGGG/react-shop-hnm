import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
      let url = 'http://localhost:3001/products';
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    };

    const rendering = () => {
        const list = [];

        for (let i=0; i<productList.length; i++) {

            list.push(
                <Col lg={3} key={productList[i].id}>
                    <ProductCard item={productList[i]}/>
                </Col>
            );
        }

        return list;
    };

    useEffect(() => {
      getProducts();
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    { rendering() }
                </Row>
            </Container>
        </div>
    );
}

export default ProductAll;