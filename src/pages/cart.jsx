import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cardTile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start min-h-screen p-5">
      {cart && cart.length ? (
        <>
          {/* Cart Items Section */}
          <div className="w-full md:w-2/3 p-5">
            <h1 className="text-2xl font-bold text-gray-900 mb-5">Shopping Cart</h1>
            <div className="space-y-4">
              {cart.map((cartItem) => (
                <CartTile key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="w-full md:w-1/3 p-5">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-red-800 mb-3">Your Cart Summary</h2>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Total Items:</span> {cart.length}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Total Amount:</span> ${totalCart.toFixed(2)}
              </p>
              <button className="w-full mt-5 bg-red-600 text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <h1 className="text-gray-800 font-bold text-2xl mb-2">Your cart is empty</h1>
          <Link to="/">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
