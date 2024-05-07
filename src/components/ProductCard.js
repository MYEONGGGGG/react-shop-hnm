import React from "react";
import {useNavigate} from "react-router-dom";

const ProductCard = ({ item }) => {

    const navigate = useNavigate();

    const showDetail = () => {
      navigate(`/product/${item.id}`);
    };

    return (
        <div className="pb-2" onClick={showDetail}>
            <img className="w-100 p-card" src={item?.img} alt={item?.id}/>
            <div className="fw-lighter">
                <label className="w-75 ps-1 item-choice">Conscious choice</label>
                <label className="w-25 text-end pe-2">
                    {item?.new === true ? <div className="item-name fw-light">NEW</div>:null}
                </label>
            </div>
            <div className="flex-column ps-1 fw-light">
                <div>{item?.title}</div>
                <div>{item?.price}원</div>
            </div>
        </div>
    );
}

export default ProductCard;