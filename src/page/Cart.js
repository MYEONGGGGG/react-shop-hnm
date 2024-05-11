import React from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    let list = useSelector(state => state.selectedProducts);
    const dispatch = useDispatch();

    const removeCart = (pid) => {
        dispatch({ type: "REMOVE_CART", payload: pid });
    };

    return (
        <div>
            <Container>
                <h1>장바구니</h1>
                { list.length > 0 ? (
                    <div className="product-list">
                        {list.map((item, index) => (
                            <div className="product" key={index}>
                                <img className="product-img" src={item.img} alt={item.title}/>
                                <div className="product-info">
                                    <p>상품명: {item.title}</p>
                                    <p>가격: {item.price}</p>
                                    <p className="submenu">
                                        <label className="w-75">사이즈: {item.size}</label>
                                        <Button onClick={() => removeCart(item.id)}
                                                className="btn-close btn-outline-light w-25"/>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : '장바구니에 담긴 상품이 없습니다.'}
            </Container>
        </div>
    );
};

export default Cart;