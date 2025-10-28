import { IoMdArrowDropright } from "react-icons/io";
import { productsData } from '../../Constants/Index';
import { FaGift } from 'react-icons/fa';

// No changes needed for the ProductCard component
const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <div className="p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        </div>
        <div className="p-4 pt-0 flex flex-col flex-grow">
            <h3 className="font-bold text-[#00171F] truncate">{product.name}</h3>
            <div className="text-sm text-gray-600 mt-2">
                <span>Product: <strong>{product.details.split('•')[0]}</strong></span>
                {product.details.split('•')[1] && <><span> • </span> <span>Size: <strong>{product.details.split('•')[1]}</strong></span></>}
            </div>
            <p className="font-bold text-[#00171F] mt-2">{product.price}</p>
            <div className="bg-[#FCEED5] text-xs text-[#00171F] p-2 rounded-lg mt-auto flex items-center font-bold">
                <FaGift className="mr-2 text-red-500" /> {product.offer}
            </div>
        </div>
    </div>
);

const Products = () => {
    return (
        <main className="bg-[#FDFDFD] py-10 px-4 sm:px-8 lg:px-20">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left pb-10 gap-4">
                <div>
                    <p className="font-semibold text-sm">Hard to choose right products for your pets?</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#003459]">Our Products</h2>
                </div>

                {/* 1. DESKTOP BUTTON: Hidden on mobile, visible on small screens and up */}
                <button className="hidden sm:flex items-center border-2 border-[#003459] text-[#003459] px-7 py-2 rounded-full font-bold hover:bg-[#FCEED5] transition-colors flex-shrink-0">
                    View more <IoMdArrowDropright className="ml-2 text-xl" />
                </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {productsData.slice(0, 8).map((product, i) => <ProductCard key={i} product={product} />)}
            </div>

            {/* 2. MOBILE BUTTON: Visible on mobile, hidden on small screens and up */}
            <div className="mt-8 flex justify-center sm:hidden">
                <button className="w-full flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                    View more <IoMdArrowDropright className="ml-2 text-xl" />
                </button>
            </div>
        </main>
    )
}

export default Products;