import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    return (
        <div>
            <div>
                <div className="login-button">
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>

            <div className="nav-section">
                <img width={100} src="https://cleanclothes.org/image-repository/livingwage-living-wage-images-h-m-logo/@@images/image.jpeg" alt="logo" />
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