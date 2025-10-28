import { IoMdArrowDropright } from "react-icons/io";
import { petsData } from '../../Constants/Index';
import { Link } from "react-router-dom";

// --- KEY CHANGES ARE IN THIS COMPONENT ---
const PetCard = ({ pet }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
            {/* --- THIS IS THE LINE I CHANGED --- */}
            {/* Reduced text size to ensure it fits on one line */}
            <h3 className="font-bold text-[#00171F] text-sm truncate">
                {pet.id} - {pet.name}
            </h3>
            <div className="text-sm text-gray-600 mt-2 flex space-x-2">
                <span>Gene: <strong>{pet.gender}</strong></span>
                <span>•</span>
                <span>Age: <strong>{pet.age}</strong></span>
            </div>
            <p className="font-bold text-[#00171F] mt-4 mt-auto">{pet.price}</p>
        </div>
    </div>
);

const Pets = () => {
    return (
        <main className="bg-[#FDFDFD] py-10 px-4 sm:px-8 lg:px-20 h-fit">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left pb-10 gap-4">
                <div>
                    <p className="font-semibold text-sm">What's new?</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#003459]">Take a look at some of our pets</h2>
                </div>
                {/* Reverted this back to a Link that navigates to the Category page */}
                <Link to='/Category'>
                    <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-2 rounded-full font-bold hover:bg-[#FCEED5] transition-colors flex-shrink-0">
                        View more <IoMdArrowDropright className="ml-2 text-xl" />
                    </button>
                </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Sliced to only show the first 8 pets on the homepage */}
                {petsData.slice(0, 8).map(pet => <PetCard key={pet.id + pet.name} pet={pet} />)}
            </div>
        </main>
    )
}

export default Pets;