import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "./header.css";

export default function Header() {

    const toggleIcon = useRef();
    const mainLinks = useRef();

    function handleClick() {
        mainLinks.current.classList.toggle("active");
        toggleIcon.current.classList.toggle("closeMode");
    }

    function handleClose() {
        mainLinks.current.classList.remove("active");
        toggleIcon.current.classList.remove("closeMode");
    }

    const cartProducts = useSelector(state => state.cart);

    return(
        <div className="header">
            <div className="container">
                <Link to="/" className="logo">Fork</Link>
                <ul ref={mainLinks} className="mainLinks">
                    <li onClick={handleClose}><NavLink to="/">Home</NavLink></li>
                    <li onClick={handleClose}><NavLink to="/menu">Menu</NavLink></li>
                    <li onClick={handleClose}><NavLink to="/about">About</NavLink></li>
                    <li onClick={handleClose}><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="icons">
                    <Link to="/cart" className="cartIcon">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span className="count">{cartProducts.length}</span>
                    </Link>
                    <div ref={toggleIcon} className="toggleIcon" onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}