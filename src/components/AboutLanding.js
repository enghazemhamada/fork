import LandingContent from "./LandingContent";

export default function AboutLanding() {
    return(
        <div className="aboutLanding">
            <div className="container">
                <LandingContent hText="best quality and taste" />
                <div className="image">
                    <img src={require('../assets/category-5.webp')} alt="" loading="lazy" />
                    <img src={require('../assets/category-4.webp')} alt="" loading="lazy" />
                </div>
            </div>
        </div>
    );
}