import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

const ProductTile = ({ product }) => {
    const { cart } = useSelector(state => state);
    const dispatch = useDispatch();

    const isInCart = cart.some((item) => item.id === product.id);

    function handleAddToCart() {
        dispatch(addToCart(product));
    }

    function handleRemoveFromCart() {
        dispatch(removeFromCart(product.id));
    }

    return (
        <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 mt-10 rounded-xl">
            <div className="h-[180px]">
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="object-contain h-full w-full"
                />
            </div>
            <div>
                <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
                    {product?.title}
                </h1>
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-between w-full mt-5">
                <p className="text-gray-700 font-bold text-lg">
                    ${product?.price}
                </p>
                <button
                    onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
                    className="bg-red-900 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:bg-red-700"
                >
                    {isInCart ? "Remove from cart" : "Add to cart"}
                </button>
            </div>
        </div>
    );
};

export default ProductTile;
