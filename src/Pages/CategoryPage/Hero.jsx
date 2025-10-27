import More from '../../assets/img/More.png'
import MoreImg from '../../assets/img/MoreImg.png'
import { FaPlayCircle} from 'react-icons/fa';
import Navbar from '../../Components/Navbar';

const Hero = () => {
  return (
    <main>
        <Navbar/>
    <div className='px-30 py-15'>
                <div className='  bg-cover bg-center bg-no-repeat items-center h-fit rounded-3xl flex justify-between'
                    style={{
                        backgroundImage: `url(${More})`,
                    }}>
    
                    <img className='w-150 h-auto' src={MoreImg} alt="" />
    
                    <div className='px-30 py-15 text-right'>
                        <h1 className='text-5xl font-bold text-[#003459] leading-tight'>One more friend</h1>
                        <h2 className="text-3xl font-semibold text-[#003459] mt-2">Thousands more fun!</h2>
                        <p className="mt-6  max-w-md mx-auto lg:mx-0 text-[1em]">
                            Having a pet means you have more joy, a new friend, a happy
                            person who will always be with you to have fun. We have 200+
                            different pets that can meet your needs!
                        </p>
                        <div className="mt-8 flex justify-center lg:justify-end space-x-4">
                            <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                                View Intro <FaPlayCircle className="ml-3" />
                            </button>
                            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>
    
    </div>
    </main>
  )
}

export default Hero
