import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addProduct } from "../rtk/slices/cartSlice";

export default function ProductCard({product}) {

    const dispatch = useDispatch();

    return(
        <div className="card">
            <img src={require(`../assets/${product.image}`)} alt={product.name} loading="lazy" />
            <h4>{product.name}</h4>
            <p>$ {product.price}</p>
            <div className="btns">
                <div className="heart"><FontAwesomeIcon icon={faHeart} /></div>
                <div className="add" onClick={() => dispatch(addProduct(product))}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        </div>
    );
}