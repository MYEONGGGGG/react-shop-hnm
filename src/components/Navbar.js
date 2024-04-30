import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();

    const goToLogin = () => {
      navigate('/login');
    };

    const goToMain = () => {
        navigate('/');
    };

    return (
        <div>
            <div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} className="icon-user"/>
                    <div className="fw-bold">로그인</div>
                </div>
            </div>

            <div className="nav-section" onClick={goToMain}>
                <img width={100} src="https://cleanclothes.org/image-repository/livingwage-living-wage-images-h-m-logo/@@images/image.jpeg" alt="HnM" />
            </div>

            <div className="menu-div">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li key={menu}> {menu}</li>
                    ))}
                </ul>
                <div className="search-bar">
                    <i><FontAwesomeIcon icon={faSearch}/></i>
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;