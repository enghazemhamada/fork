import { Link } from "react-router-dom";
import "./landingContent.css";

export default function LandingContent({hText}) {
    return(
        <div className="content">
            <h2>{hText}</h2>
            <p>
                we pride ourselves on providing a curated of the finest, nutrient-rich
                products that cater to your health conscious lifestyle.
            </p>
            <Link className="btn">See More</Link>
        </div>
    );
}