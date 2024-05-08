import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    // API 호출
    const getProducts = async () => {
      let searchQuery = query.get('q') || '';
      let url = process.env.REACT_APP_API_URL + `products?q=${searchQuery}`;
      // console.log(url);
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    };

    // 함수형 렌더링
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

    // query가 바뀔때마다 api 호출
    useEffect(() => {
      getProducts();
    }, [query]);

    return (
        // <div>
        //     <Container>
        //         <Row>
        //             {productList.map((menu) => (
        //                 <Col lg={3} key={menu.title}>
        //                     <ProductCard item={menu}/>
        //                 </Col>
        //             ))}
        //         </Row>
        //     </Container>
        // </div>

        // 함수형 렌더링
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