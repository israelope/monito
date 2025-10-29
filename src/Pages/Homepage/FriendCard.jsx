import More from '../../assets/img/More.png';
import MoreImg from '../../assets/img/MoreImg.png';
import { FaPlayCircle } from 'react-icons/fa';

const FriendCard = () => {
    return (
        <main className='px-4 sm:px-8 lg:px-20 py-10 sm:py-16'>
            <div className='rounded-3xl overflow-hidden'>
                
                {/* --- DESKTOP VIEW (hidden on mobile) --- */}
                <div 
                    className='hidden lg:flex flex-row items-center bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: `url(${More})`,
                    }}
                >
                    <div className='w-1/2'>
                        <img className='w-full h-auto object-cover' src={MoreImg} alt="Happy dog with owner" />
                    </div>
                    <div className='w-1/2 p-12 text-right'>
                        <h1 className='text-5xl font-bold text-[#003459] leading-tight'>One more friend</h1>
                        <h2 className="text-3xl font-semibold text-[#003459] mt-2">Thousands more fun!</h2>
                        <p className="mt-6 max-w-md ml-auto text-base">
                            Having a pet means you have more joy, a new friend, a happy
                            person who will always be with you to have fun. We have 200+
                            different pets that can meet your needs!
                        </p>
                        <div className="mt-8 flex justify-end gap-4">
                            <button className="flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                                View Intro <FaPlayCircle className="ml-3" />
                            </button>
                            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- MOBILE VIEW (hidden on desktop) --- */}
                <div className='lg:hidden flex flex-col'>
                    {/* Top section with a cream background for text (height is determined by content) */}
                    <div className='bg-[#FCEED5] flex flex-col items-center justify-center p-8 text-center'>
                        <h1 className='text-4xl font-bold text-[#003459] leading-tight'>One More Friend</h1>
                        <h2 className="text-2xl font-semibold text-[#003459] mt-2">Thousands More Fun!</h2>
                        <p className="mt-4 max-w-xs mx-auto text-sm">
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
                        </p>
                        <div className="mt-6 flex flex-col justify-center gap-4 w-full max-w-xs">
                            <button className="flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold transition-colors">
                                View Intro <FaPlayCircle className="ml-3" />
                            </button>
                            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                Explore Now
                            </button>
                        </div>
                    </div>

                    {/* Bottom section with a blue background that grows to fill remaining space */}
                    <div className='bg-[#003459] flex-grow'>
                        <img 
                            className='h-full w-full object-cover' 
                            src={MoreImg} 
                            alt="Happy dog with owner" 
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FriendCard;