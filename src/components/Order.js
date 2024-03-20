import SectionHeading from "./SectionHeading";
import OrderCard from "./OrderCard";

export default function Order() {
    return(
        <div className="order">
            <div className="container">
                <SectionHeading text="how to order?" />
                <div className="cards">
                    <OrderCard title="Choose what to eat" img="order-1.webp" />
                    <OrderCard title="Choose your location" img="order-2.webp" />
                    <OrderCard title="now! your food in way" img="order-3.webp" />
                </div>
            </div>
        </div>
    );
}