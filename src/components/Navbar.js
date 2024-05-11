import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = ({authenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToLogin = () => {
        // 로그인 상태라면
        if (authenticate) {
            // 로그아웃 후 메인화면 유지
            dispatch({ type: "LOGOUT", payload: {id: null, pwd: null, auth: true} });
            // 선택한 상품 및 장바구니 비우기
            dispatch({ type: "DESELECTED" });
            dispatch({ type: "RESET_CART" });
            goToMain();
        }

        // 로그아웃 상태라면
        else {
            // 로그인 페이지로 이동
            navigate('/login');
        }
    };

    const goToMain = () => {
        navigate('/');
    };

    const goToCart = () => {
        navigate('/cart');
    };

    const search = (event) => {
        if (event.key === "Enter") {
            //입력한 검색어를 읽어와서
            let keyword = event.target.value;

            // url을 바꿔준다
            navigate(`/?q=${keyword}`);
        }
    };

    return (
        <div>
            <div className="submenu">
                <div className="login-button" onClick={ goToLogin }>
                    <FontAwesomeIcon icon={faUser} className="icon-user"/>
                    <div className="fw-bold">{authenticate === false?'로그인':'로그아웃'}</div>
                </div>
                <div className="login-button" onClick={ goToCart }>
                    <FontAwesomeIcon icon={faShoppingBag} className="icon-user"/>
                    <div className="fw-bold">장바구니</div>
                </div>
            </div>

            <div className="nav-section" onClick={ goToMain }>
                <img width={100}
                     src="https://cleanclothes.org/image-repository/livingwage-living-wage-images-h-m-logo/@@images/image.jpeg"
                     alt="HnM" />
            </div>

            <div className="menu-div">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li key={menu}> {menu}</li>
                    ))}
                </ul>
                <div className="search-bar">
                    <i><FontAwesomeIcon icon={faSearch}/></i>
                    <input type="text" onKeyPress={(event) => search(event)}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;