import { IoMdArrowDropright } from "react-icons/io";
import { knowledgeData } from '../../Constants/Index';

const KnowledgeCard = ({ article }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
            <span className="bg-[#00A7E7] text-white px-3 py-1 text-xs font-bold rounded-full self-start">Pet knowledge</span>
            {/* 1. Added a minimum height to the title for consistent alignment */}
            <h3 className="font-bold text-[#00171F] mt-3 text-lg h-14">{article.title}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">{article.desc}</p>
        </div>
    </div>
);

const Blog = () => {
    return (
        // 2. Using standard responsive padding
        <main className="py-10 px-4 sm:px-8 lg:px-20">
            {/* 3. Header now only contains the title */}
            <div className="text-center sm:text-left pb-10">
                <p className="font-semibold text-sm">You already know ?</p>
                <h2 className="text-3xl font-bold text-[#003459]">Useful pet knowledge</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {knowledgeData.slice(0, 3).map((article, i) => <KnowledgeCard key={i} article={article} />)}
            </div>

            {/* 4. "View more" button is now at the bottom */}
            <div className="mt-8 flex justify-center">
                <button className="w-full sm:w-auto flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                    View more <IoMdArrowDropright className="ml-2 text-xl" />
                </button>
            </div>
        </main>
    )
}

export default Blog;