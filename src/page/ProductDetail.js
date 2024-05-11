import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {

    let {id} = useParams();
    const [size, setSize] = useState(null);
    const dispatch = useDispatch();
    let product = useSelector(state => state.product);

    const getProductDetail = async () => {
        try {
            let url = process.env.REACT_APP_API_URL + `products/${id}`;
            let response = await fetch(url);

            return response.json();
        } catch (e) {
            console.error('데이터 가져오기 중 오류 발생: ' + e);
        }
    };

    const sizeSelect = (val) => {
      setSize(val);
    };

    const addCart = () => {
        try {
            if (size !== null) {
                dispatch({
                    type: "ADD_CART",
                    payload: {
                        "id": product.id,
                        "img": product.img,
                        "title": product.title,
                        "price": product.price,
                        "size": size
                    }
                });
            }
            else {
                alert('사이즈를 선택하세요.');
            }
        } finally {
            alert('상품 추가 완료.');
        }
    };

    useEffect(() => {
        console.log('선택한 사이즈? ' + size);
    }, [size]);

    useEffect(() => {
        getProductDetail().then((data) => {
            dispatch({ type: "SELECTED", payload: data });
        });
    }, []);

    if (!product) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    else {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="product-img">
                            <img src={product?.img} alt="loading..."/>
                        </Col>
                        <Col className="fw-light">
                            <div className="fw-lighter pt-2 selected-size">
                                <div className="fw-bold">{product?.title}</div>
                                <label className="ps-2">
                                    {product?.new === true ? <div className="item-name fw-light">NEW</div> : null}
                                </label>
                            </div>

                            <div className="pt-2">{product?.price}원</div>

                            <div className="fw-lighter pt-2">
                                <label className="item-choice">
                                    {product?.choice === true ? <div>Conscious choice</div> : null}
                                </label>
                            </div>

                            <div className="pt-3 selected-size">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    {product.size && product.size.map((size, index) => (
                                        <Button className="btn btn-primary"
                                                key={index}
                                                onClick={() => sizeSelect(size)}>
                                            {size}
                                        </Button>
                                    ))}
                                </div>

                                <div className="w-75 ps-2">
                                    {size === null ? <div className="fw-light">사이즈를 선택해주세요.</div> : size}
                                </div>
                            </div>
                            <div className="pt-3">
                                <Button className="btn-dark text-white w-100 pt-2" onClick={addCart}>장바구니 담기</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ProductDetail;