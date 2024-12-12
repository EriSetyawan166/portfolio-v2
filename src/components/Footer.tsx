import githubIcon from '../assets/icon/github-brands-solid.svg'
import linkedinIcon from '../assets/icon/linkedin-brands-solid.svg'
import instagramIcon from '../assets/icon/instagram-brands-solid.svg'

function Footer() {
    return (
        <footer>
            <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center gap-3">
                <a href="https://github.com/EriSetyawan166">
                    <img src={githubIcon} alt="github" className='w-6' />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-eri-setyawan-72169b213/">
                    <img src={linkedinIcon} alt="linkedin" className='w-6' />
                </a>
                <a href="https://www.instagram.com/erisetyawan166/">
                    <img src={instagramIcon} alt="instagram" className='w-6' />
                </a>
            </div>
        </footer>

    )
}

export default Footer