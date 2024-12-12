import { Link } from 'react-scroll';
import catCoding from '../assets/img/cat_coding.jpg';

function Hero() {
    return (
        <div id='hero-section' className='flex justify-center pt-20 h-screen'>
            <div className='flex flex-col justify-center gap-4'>
                <img src={catCoding} alt="this is literally me" className='w-[500px]' />
                <p className='font-semibold text-xs sm:text-base'>Hi! I Make a Website Looks Cool!.
                    <span>
                        <Link
                            to="about-section"
                            smooth={true}
                            duration={500}
                            className="text-blue-600 underline cursor-pointer"
                        >
                            [You Do?]
                        </Link>
                    </span>
                </p>

            </div>
        </div>

    )
}

export default Hero