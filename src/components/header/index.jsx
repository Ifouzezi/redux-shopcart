import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto px-5">
            <Link to={'/'}>
                <h1 className="text-red-900 font-bold text-xl sm:text-3xl cursor-pointer tracking-wide">
                    REACT REDUX SHOPPING CART
                </h1>
            </Link>
            <ul className="flex items-center space-x-6 text-gray-800 font-semibold">
                <li>
                    <Link to={'/'} className="cursor-pointer hover:text-red-600">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/cart'} className="cursor-pointer hover:text-red-600">
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
