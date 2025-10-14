import React from 'react';
import { FaPlayCircle, FaSearch, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPaw, FaGift } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";
import Pet1 from './assets/img/Pet2.png'
import Pro6 from './assets/img/Pro6.png'

// Component Data (Keeping data separate from JSX is good practice)
const petsData = [
  { id: 'MO231', name: 'Pomeranian White', gender: 'Male', age: '02 months', price: '6.900.000 VND', image: Pet1 },
  { id: 'MO502', name: 'Poodle Tiny Yellow', gender: 'Female', age: '02 months', price: '3.900.000 VND', image: Pet1 },
  { id: 'MO102', name: 'Poodle Tiny Sepia', gender: 'Male', age: '02 months', price: '4.000.000 VND', image: Pet1 },
  { id: 'MO512', name: 'Alaskan Malamute Grey', gender: 'Male', age: '02 months', price: '8.900.000 VND', image: Pet1 },
  { id: 'MO231', name: 'Pembroke Corgi Cream', gender: 'Male', age: '02 months', price: '7.900.000 VND', image: Pet1 },
  { id: 'MO502', name: 'Pembroke Corgi Tricolor', gender: 'Female', age: '02 months', price: '9.000.000 VND', image: Pet1 },
  { id: 'MO231', name: 'Pomeranian White', gender: 'Female', age: '02 months', price: '6.500.000 VND', image: Pet1 },
  { id: 'MO512', name: 'Poodle Tiny Dairy Cow', gender: 'Male', age: '02 months', price: '5.000.000 VND', image: Pet1 },
];

const productsData = [
    { name: 'Reflex Plus Adult Cat Food Salmon', details: 'Dog Food • 385gm', price: '140.000 VND', offer: 'Free Toy & Free Shaker', image: Pet1 },
    { name: 'Reflex Plus Adult Cat Food Salmon', details: 'Cat Food • 1.5kg', price: '165.000 VND', offer: 'Free Toy & Free Shaker', image: Pet1 },
    { name: 'Cat scratching ball toy kitten sisal rope ball', details: 'Toy', price: '1.100.000 VND', offer: 'Free Cat Food', image: Pet1 },
    { name: 'Cute Pet Cat Warm Nest', details: 'Toy', price: '410.000 VND', offer: 'Free Cat Food', image: Pet1 },
    { name: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil', details: 'Dog Food • 385gm', price: '350.000 VND', offer: 'Free Toy & Free Shaker', image: Pro6 },
    { name: 'Costumes Fashion Pet Clother Cowboy Rider', details: 'Costume • 1.5kg', price: '500.000 VND', offer: 'Free Toy & Free Shaker', image: Pro6 },
    { name: 'Costumes Chicken Drumsti ck Headband', details: 'Costume', price: '400.000 VND', offer: 'Free Cat Food', image: Pet1 },
    { name: 'Plush Pet Toy', details: 'Toy', price: '250.000 VND', offer: 'Free Food & Shaker', image: Pet1 },
];

const knowledgeData = [
    { title: 'What is a Pomeranian? How to Identify Pomeranian Dogs', desc: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu...', image: 'https://i.imgur.com/1hXy4jT.png'},
    { title: 'Dog Diet You Need To Know', desc: 'Dividing a dogs diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...', image: 'https://i.imgur.com/6yXz3jL.png'},
    { title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively', desc: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.', image: 'https://i.imgur.com/9mZ6vEw.png'}
];

const sellerLogos = [
    'https://i.imgur.com/s4f3z3L.png', 'https://i.imgur.com/vX2Y2vJ.png', 'https://i.imgur.com/k3Xv2YJ.png',
    'https://i.imgur.com/fQpXmQW.png', 'https://i.imgur.com/j3yA42S.png', 'https://i.imgur.com/cR7L8Xv.png', 'https://i.imgur.com/d9j8dYJ.png'
];

// --- Sub-Components ---

const Header = () => (
    <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
            <div>
                <img src="https://i.imgur.com/b2d2yvE.png" alt="Monito Logo" className="h-10"/>
            </div>
            <nav className="hidden lg:flex items-center space-x-8 text-lg">
                <a href="#" className="text-[#003459] font-bold">Home</a>
                <a href="#" className="text-gray-800 font-semibold hover:text-[#003459]">Category</a>
                <a href="#" className="text-gray-800 font-semibold hover:text-[#003459]">About</a>
                <a href="#" className="text-gray-800 font-semibold hover:text-[#003459]">Contact</a>
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
                <div className="relative">
                    <input type="text" placeholder="Search something here!" className="bg-white rounded-full py-2.5 pl-10 pr-4 w-72 focus:outline-none border-2 border-gray-200"/>
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <button className="bg-[#003459] text-white px-7 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                    Join the community
                </button>
                <div className="flex items-center space-x-2 text-[#003459] font-bold cursor-pointer">
                    <img src="https://i.imgur.com/vQ8XyvJ.png" alt="Vietnam Flag" className="h-6 rounded-full"/>
                    <span>VND</span>
                    <FaChevronDown className="w-3 h-3"/>
                </div>
            </div>
            <div className="lg:hidden">
                <button className="text-3xl text-[#003459]">☰</button>
            </div>
        </div>
    </header>
);

const Hero = () => (
    <section className="container mx-auto px-4 pt-8 pb-16">
        <div className="relative flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left z-10">
                <h1 className="text-6xl font-extrabold text-[#003459] leading-tight">One More Friend</h1>
                <h2 className="text-5xl font-bold text-[#003459] mt-2">Thousands More Fun!</h2>
                <p className="mt-6 text-gray-700 max-w-md mx-auto lg:mx-0 text-lg">
                    Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                </p>
                <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                    <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                        View Intro <FaPlayCircle className="ml-3" />
                    </button>
                    <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                        Explore Now
                    </button>
                </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
                <div className="relative">
                    <div className="absolute inset-0 bg-[#003459] rounded-l-[120px] rounded-b-[120px] transform -rotate-3 scale-105"></div>
                    <img src="https://i.imgur.com/2L2nS8H.png" alt="Woman holding a Corgi dog" className="relative z-10 w-full" />
                </div>
            </div>
        </div>
    </section>
);


const PetCard = ({ pet }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover"/>
        <div className="p-4">
            <h3 className="font-bold text-[#00171F]">{pet.id} - {pet.name}</h3>
            <div className="text-sm text-gray-600 mt-2 flex space-x-2">
                <span>Gene: <strong>{pet.gender}</strong></span>
                <span>•</span>
                <span>Age: <strong>{pet.age}</strong></span>
            </div>
            <p className="font-bold text-[#00171F] mt-2">{pet.price}</p>
        </div>
    </div>
);

const PetsSection = () => (
    <section className="bg-[#FDFDFD] py-16">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <p className="text-gray-600">What's new?</p>
                    <h2 className="text-3xl font-bold text-[#003459]">Take A Look At Some Of Our Pets</h2>
                </div>
                <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                    View more <IoMdArrowDropright className="ml-2 text-xl" />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {petsData.map(pet => <PetCard key={pet.id + pet.name} pet={pet} />)}
            </div>
        </div>
    </section>
);

const AdoptionBanner = () => (
    <section className="container mx-auto px-4 py-16">
        <div className="bg-[#FCEED5] rounded-3xl p-8 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 relative">
                <img src="https://i.imgur.com/w9O6sQY.png" alt="Woman holding up a puppy" className="w-full rounded-2xl"/>
            </div>
            <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left mt-8 lg:mt-0">
                 <h2 className="text-5xl font-extrabold text-[#003459] flex items-center justify-center lg:justify-start">
                    Adoption <FaPaw className="ml-4 text-4xl"/>
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
        </div>
    </section>
);


const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <div className="p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain"/>
        </div>
        <div className="p-4 pt-0">
            <h3 className="font-bold text-[#00171F] truncate">{product.name}</h3>
            <div className="text-sm text-gray-600 mt-2">
                <span>Product: <strong>{product.details.split('•')[0]}</strong></span>
                {product.details.split('•')[1] && <><span>•</span> <span>Size: <strong>{product.details.split('•')[1]}</strong></span></>}
            </div>
            <p className="font-bold text-[#00171F] mt-2">{product.price}</p>
            <div className="bg-[#FCEED5] text-xs text-[#00171F] p-2 rounded-lg mt-3 flex items-center font-bold">
               <FaGift className="mr-2 text-red-500"/> {product.offer}
            </div>
        </div>
    </div>
);


const ProductsSection = () => (
     <section className="bg-[#FDFDFD] py-16">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <p className="text-gray-600">Hard to choose right products for your pets?</p>
                    <h2 className="text-3xl font-bold text-[#003459]">Our Products</h2>
                </div>
                <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                    View more <IoMdArrowDropright className="ml-2 text-xl" />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.map((product, i) => <ProductCard key={i} product={product} />)}
            </div>
        </div>
    </section>
);

const SellersSection = () => (
    <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#003459]">Pet Sellers</h2>
            <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                View all our sellers <IoMdArrowDropright className="ml-2 text-xl" />
            </button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {sellerLogos.map((logo, i) => <img key={i} src={logo} alt={`Seller ${i+1}`} className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"/>)}
        </div>
    </section>
);


const KnowledgeCard = ({ article }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
            <span className="bg-[#00A7E7] text-white px-3 py-1 text-xs font-bold rounded-full">Pet knowledge</span>
            <h3 className="font-bold text-[#00171F] mt-3 text-lg">{article.title}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">{article.desc}</p>
        </div>
    </div>
);

const KnowledgeSection = () => (
     <section className="bg-[#FDFDFD] py-16">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <p className="text-gray-600">You already know?</p>
                    <h2 className="text-3xl font-bold text-[#003459]">Useful Pet Knowledge</h2>
                </div>
                <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                    View more <IoMdArrowDropright className="ml-2 text-xl" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {knowledgeData.map((article, i) => <KnowledgeCard key={i} article={article} />)}
            </div>
        </div>
    </section>
);


const Footer = () => (
    <footer className="bg-[#FCEED5] pt-16">
        <div className="container mx-auto px-4">
            <div className="bg-[#003459] text-white p-8 rounded-2xl flex flex-col lg:flex-row justify-between items-center">
                <h2 className="text-3xl font-bold text-center lg:text-left">Register Now So You Don't Miss Our Programs</h2>
                <div className="bg-white p-2 rounded-xl mt-6 lg:mt-0 flex w-full max-w-lg">
                    <input type="email" placeholder="Enter your Email" className="w-full p-3 rounded-lg text-gray-800 focus:outline-none"/>
                    <button className="bg-[#003459] p-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">Subscribe Now</button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center py-10 mt-8">
                <nav className="flex space-x-8 text-[#00171F] font-semibold">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Category</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Contact</a>
                </nav>
                <div className="flex space-x-6 text-[#00171F] text-2xl my-6 md:my-0">
                    <a href="#" className="hover:text-[#003459]"><FaFacebookF /></a>
                    <a href="#" className="hover:text-[#003459]"><FaTwitter /></a>
                    <a href="#" className="hover:text-[#003459]"><FaInstagram /></a>
                    <a href="#" className="hover:text-[#003459]"><FaYoutube /></a>
                </div>
            </div>

            <hr className="border-t-2 border-gray-300" />

            <div className="flex flex-col md:flex-row justify-between items-center py-6 text-center">
                <p className="text-gray-600 text-sm">&copy; 2025 Monito. All rights reserved.</p>
                <img src="https://i.imgur.com/b2d2yvE.png" alt="Monito Logo" className="h-10 my-4 md:my-0"/>
                <div className="flex space-x-6 text-[#00171F] font-semibold">
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

// --- Main App Component ---

const App = () => {
    return (
        <div className="bg-[#FFF9F0]">
            <Header />
            <main className='p-20'>
                <Hero />
                <PetsSection />
                <AdoptionBanner />
                <ProductsSection />
                <SellersSection />
                <KnowledgeSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;