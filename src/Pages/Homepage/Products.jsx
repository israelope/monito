import { IoMdArrowDropright } from "react-icons/io";
import { productsData } from '../../Constants/Index';
import {FaGift } from 'react-icons/fa';



const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <div className="p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
        </div>
        <div className="p-4 pt-0">
            <h3 className="font-bold text-[#00171F] truncate">{product.name}</h3>
            <div className="text-sm text-gray-600 mt-2">
                <span>Product: <strong>{product.details.split('•')[0]}</strong></span>
                {product.details.split('•')[1] && <><span>•</span> <span>Size: <strong>{product.details.split('•')[1]}</strong></span></>}
            </div>
            <p className="font-bold text-[#00171F] mt-2">{product.price}</p>
            <div className="bg-[#FCEED5] text-xs text-[#00171F] p-2 rounded-lg mt-3 flex items-center font-bold">
                <FaGift className="mr-2 text-red-500" /> {product.offer}
            </div>
        </div>
    </div>
);



const Products = () => {
    return (
        <main className="bg-[#FDFDFD] pt-10 px-30 h-fit ">
            <div className="flex justify-between pb-10">
                <div >
                    <p className="font-semibold">Hard to choose right products for your pets?</p>
                    <h2 className="text-3xl font-bold text-[#003459]">Our Products</h2>
                </div>
                <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-1 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                    View more <IoMdArrowDropright className="ml-2 text-xl" />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.map((product, i) => <ProductCard key={i} product={product} />)}
            </div>
        </main>
    )
}

export default Products