import React from "react";

const ProductCard = ({ item }) => {

    return (
        <div className="pb-2">
            <img src={item?.img} className="w-100 p-card" alt={item?.id}/>
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