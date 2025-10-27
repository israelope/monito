import { IoMdArrowDropright } from "react-icons/io";
import { petsData } from '../../Constants/Index';
import { Link } from "react-router-dom";




const PetCard = ({ pet }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
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



const Pets = () => {
    return (
        <main className="bg-[#FDFDFD] pt-10 px-30 h-fit">
            <div className="flex justify-between pb-10">
                <div>
                    <p className="font-semibold">What's new?</p>
                    <h2 className="text-3xl font-bold text-[#003459]">Take a look at some of our pets</h2>
                </div>
                <Link to='/Category'><button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-1 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                    View more <IoMdArrowDropright className="ml-2 text-xl" />
                </button></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {petsData.map(pet => <PetCard key={pet.id + pet.name} pet={pet} />)}
            </div>
        </main>
    )
}

export default Pets