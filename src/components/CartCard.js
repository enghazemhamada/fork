import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { decrementQuantity, deleteProduct, incrementQuantity } from "../rtk/slices/cartSlice";

export default function CartCard({product}) {

    const dispatch = useDispatch();

    return(
        <div className="card">
            <div>
                <img src={require(`../assets/${product.image}`)} alt={product.name} loading="lazy" />
            </div>
            <div>{product.name}</div>
            <div>$ {product.price}</div>
            <div className="quantity">
                <button onClick={() => dispatch(decrementQuantity(product))}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(product))}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <button className="delete" onClick={() => dispatch(deleteProduct(product))}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    );
}