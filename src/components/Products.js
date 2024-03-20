import { productsData } from "../data/ProductsData";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

export default function Products() {

    const productsCards = productsData.map(product => <ProductCard key={product.id} product={product} />);
    
    return(
        <div className="products">
            <div className="container">
                <SectionHeading text="our products" />
                <div className="cards">{productsCards}</div>
            </div>
        </div>
    );
}