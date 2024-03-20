import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="box">
                    <h2>Fork</h2>
                    <p>
                        Because your health is important to us, all of our products are 100% natural, and we
                        have a wonderful team in our kitchen to provide the most delicious and wonderful food.
                    </p>
                </div>
                <div className="links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="links">
                    <h4>Social Media</h4>
                    <ul>
                        <li><Link to=''>Facebook</Link></li>
                        <li><Link to=''>Instagram</Link></li>
                        <li><Link to=''>Twitter</Link></li>
                        <li><Link to=''>Youtube</Link></li>
                    </ul>
                </div>
                <div className="info">
                    <h4>Informations</h4>
                    <div className="line">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <div>10 ST Cairo</div>
                    </div>
                    <div className="line">
                        <FontAwesomeIcon icon={faClockFour} />
                        <div>Business Hours: From 08:00 To 20:00</div>
                    </div>
                    <div className="line">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                        <div>
                            <span>0123456789</span>
                            <span>0123456789</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                <p>&copy;2024 <span>Fork</span> All Right Reserved</p>
                <span>Hazem Hamada</span>
            </div>
        </div>
    );
}