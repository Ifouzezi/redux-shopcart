

const ProductTile = ({ product }) => {
    return <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360] mt-10 rounded-xl">
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
        <div className="flex items-center justify-between w-full mt-5">
            <p className="text-gray-700 font-bold text-lg">
                ${product?.price}
            </p>
            <button className="bg-red-900 text-white px-4 py-3 rounded-lg">
                Add to cart
            </button>
        </div>
    </div>
};

export default ProductTile;