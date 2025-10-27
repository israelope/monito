import { IoMdArrowDropright } from "react-icons/io";
import { sellerLogos } from '../../Constants/Index';
import Seller from '../../assets/img/Sellers.png';
import SellersImg from '../../assets/img/SellersImg.png';
import { FaPlayCircle, FaPaw } from 'react-icons/fa';

const Sellers = () => {
    return (
        <main className='pt-30 px-30'>
            <div className="flex justify-between pb-10">
                <div>
                    <p className="font-semibold"> Proud to be part of <span className="text-2xl font-bold text-[#003459]">Pet Sellers</span></p>

                </div>
                <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-1 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                    View all our sellers <IoMdArrowDropright className="ml-2 text-xl" />
                </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
                {sellerLogos.map((logo, i) => <img key={i} src={logo} alt={`Seller ${i + 1}`} className="h-16 object-contain  hover:grayscale-0 transition-all duration-300" />)}
            </div>
            <section className="pt-15">

            <div className='  bg-cover bg-center bg-no-repeat items-center h-fit rounded-3xl flex justify-between'
                style={{
                    backgroundImage: `url(${Seller})`,
                }}>
                <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left mt-8 lg:mt-0">
                    <h2 className="text-5xl font-extrabold text-[#003459] flex items-center justify-center lg:justify-start">
                        Adoption <FaPaw className="ml-4 text-4xl" />
                    </h2>
                    <h3 className="text-4xl font-bold text-[#003459] mt-2">We Need Help. So Do They.</h3>
                    <p className="mt-4 text-gray-700 max-w-md mx-auto lg:mx-0">
                        Adopt a pet and give it a home, it will be love you back unconditionally.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                        <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                            Explore Now
                        </button>
                        <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-opacity-90 hover:text-white hover:bg-[#003459] transition-colors">
                            View Intro <FaPlayCircle className="ml-3" />
                        </button>
                    </div>
                </div>
                <img className='w-150 h-auto' src={SellersImg} alt="" />


            </div>
            </section>
        </main>
    )
}

export default Sellers