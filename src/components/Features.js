import FeatureCard from "./FeatureCard";
import SectionHeading from "./SectionHeading";

export default function Features() {
    return(
        <div className="features">
            <div className="container">
                <SectionHeading text="Why Choose Our Food?" />
                <div className="cards">
                    <FeatureCard img="features-1.webp" title="Quality Food" desc="Because Your Health And The Health Of Your Family Are Important To Us, All Our Productsare 100% Natural Without Any Chemicals." />
                    <FeatureCard img="features-2.webp" title="Super Taste" desc="Because Your Happiness Is Our Goal, We Have A Wonderful Team In Our Kitchen To Provide The Most Delicious And Wonderful Food." />
                    <FeatureCard img="features-3.webp" title="Fast Delivery" desc="We Have A Delivery Team, So If You Are Anywhere, All You Have To Do Is Choose Your Food And As Soon As Possible It Will Be In Front Of Your Eyes." />
                </div>
            </div>
        </div>
    );
}