import More from '../../assets/img/More.png'; // This is your desktop background image
import MoreImg from '../../assets/img/MoreImg.png'; // This is the woman with the dog
import { FaPlayCircle } from 'react-icons/fa';

const FriendCard = () => {
    return (
        <main className='px-4 sm:px-8 lg:px-20 py-10 sm:py-16'>
            {/* Main wrapper for both desktop and mobile views */}
            <div 
                // Removed bg-cover bg-center and added custom gradient for mobile
                className='rounded-3xl overflow-hidden'
            >
                {/* --- DESKTOP VIEW (hidden on mobile, uses original background image) --- */}
                <div 
                    className='hidden lg:flex flex-row items-center bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: `url(${More})`, // Desktop uses the image
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

                {/* --- MOBILE VIEW (hidden on desktop, uses gradient background) --- */}
                <div 
                    className='relative h-[680px] lg:hidden flex flex-col items-center justify-start py-8'
                    style={{
                        background: 'linear-gradient(to bottom, #FCEED5 0%, #FCEED5 45%, #003459 45%, #003459 100%)',
                    }}
                >
                    {/* Text content always at the top */}
                    <div className='w-full p-4 text-center z-20'>
                        <h1 className='text-4xl font-bold text-[#003459] leading-tight'>One More Friend</h1>
                        <h2 className="text-2xl font-semibold text-[#003459] mt-2">Thousands More Fun!</h2>
                        <p className="mt-4 max-w-xs mx-auto text-sm">
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
                        </p>
                        <div className="mt-6 flex flex-col justify-center gap-4">
                            <button className="flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                                View Intro <FaPlayCircle className="ml-3" />
                            </button>
                            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                Explore Now
                            </button>
                        </div>
                    </div>

                    {/* Image positioned absolutely at the bottom, on the dark blue part */}
                    <img 
                        className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[60%] w-auto object-contain z-10' 
                        src={MoreImg} 
                        alt="Happy dog with owner" 
                    />
                </div>
            </div>
        </main>
    );
}

export default FriendCard;