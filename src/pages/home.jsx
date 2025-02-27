import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/productTile";


const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchListOfProducts() {
        setLoading(true);
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchListOfProducts();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="min-h-screen w-full flex justify-center items-center">
                    <Circles height={120} width={120} color="rgb(127,29,29)" visible={true} />
                </div>
            ) : (
                <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto p-3">
                    {products.length > 0 ? products.map((product) => (
                        <ProductTile key={product.id} product={product} />
                    )) : null} 
                </div>
            )}
        </div>
    );
};

export default Home;
