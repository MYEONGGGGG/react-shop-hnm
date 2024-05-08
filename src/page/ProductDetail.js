import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Col, Container, DropdownButton, Dropdown, Row, Button} from "react-bootstrap";

const ProductDetail = () => {

    let {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        let url = process.env.REACT_APP_API_URL + `products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col className="product-img">
                       <img src={product?.img} alt="loading..."/>
                    </Col>
                    <Col className="fw-light">
                        <div>{product?.title}</div>
                        <div className="pt-2">{product?.price}원</div>
                        <div className="fw-lighter pt-2">
                            <label className="w-25 item-choice">Conscious choice</label>
                            <label className="w-75 text-start">
                                {product?.new === true ? <div className="item-name fw-light">NEW</div> : null}
                            </label>
                        </div>
                        <div className="pt-5">
                            <DropdownButton id="dropdown-btn" title="사이즈 선택">
                                <Dropdown.Item>{product?.size[0]}</Dropdown.Item>
                                <Dropdown.Item>{product?.size[1]}</Dropdown.Item>
                                <Dropdown.Item>{product?.size[2]}</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="pt-3">
                            <Button className="btn-dark text-white w-100 pt-2">장바구니 담기</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductDetail;