import MenuLanding from "../components/MenuLanding";
import MenuSection from "../components/MenuSection";
import "./menu.css";

export default function Menu() {

    const burgerData = [{name:"Vegetable Burger",price:40},{name:"Cheese Burger",price:60},{name:"Beef Burger",price:20},{name:"Cheese Burger",price:30},{name:"Cheese Burger",price:50}];
    const pastaData = [{name:"Salad Pasta",price:40},{name:"Cheese Pasta",price:60},{name:"Beef Pasta",price:20},{name:"Seafood Pasta",price:30},{name:"Cheese Pasta",price:50}];
    const pizzaData = [{name:"Vegetable Pizza",price:40},{name:"Cheese Pizza",price:60},{name:"Beef Pizza",price:20},{name:"Seafood Pizza",price:30},{name:"Cheese Pizza",price:50}];

    return(
        <>
            <MenuLanding />
            <MenuSection title="our delicious Burger" data={burgerData} img='category-2.webp' />
            <MenuSection title="our delicious Pasta" data={pastaData} img='category-3.webp' />
            <MenuSection title="our delicious Pizza" data={pizzaData} img='category-1.webp' />
        </>
    );
}