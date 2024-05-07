import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
      let searchQuery = query.get('q') || '';
      let url = `http://localhost:3001/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    };

    // const rendering = () => {
    //     const list = [];
    //
    //     for (let i=0; i<productList.length; i++) {
    //
    //         list.push(
    //             <Col lg={3} key={productList[i].id}>
    //                 <ProductCard item={productList[i]}/>
    //             </Col>
    //         );
    //     }
    //
    //     return list;
    // };

    useEffect(() => {
      getProducts();
    }, [query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col lg={3}>
                            <ProductCard item={menu}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>

        // <div>
        //     <Container>
        //         <Row>
        //             { rendering() }
        //         </Row>
        //     </Container>
        // </div>
    );
}

export default ProductAll;