import CategoryCard from "./CategoryCard";
import SectionHeading from "./SectionHeading";

export default function Category() {
    return(
        <div className="category">
            <div className="container">
                <SectionHeading text="Our Category" />
                <div className="cards">
                    <CategoryCard text="Pizza" />
                    <CategoryCard text="Burger" />
                    <CategoryCard text="Pasta" />
                    <CategoryCard text="Sweet" />
                    <CategoryCard text="Ice Cream" />
                </div>
            </div>
        </div>
    );
}