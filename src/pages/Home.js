import Category from "../components/Category";
import Products from "../components/Products";
import Slider from "../components/Slider";
import "./home.css";

export default function Home() {
  return (
    <>
      <Slider />
      <Category />
      <Products />
    </>
  );
}
