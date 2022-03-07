import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export function Header() {
    return (
        <header className='mx-5'>
            <nav className='flex justify-between pt-5'>
                <div className='flex items-center gap-8'>
                    <div>
                        <a href="#">
                        <img className='w-10' src="/logo.svg" />
                        </a>
                    </div>
                    <ul className='flex gap-4'>
                        <li><a href="" className='uppercase'>Home</a></li>
                        <li><a href="" className='uppercase'>Story</a></li>
                        <li><a href="" className='uppercase'>Wallpapers</a></li>
                        <li><a href="" className='uppercase'>Characters</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <FaFacebookF size={18} />
                    <FaTwitter size={18} />
                    <FaYoutube size={18} />
                    <FaInstagram size={18} />
                </div>
            </nav>
        </header>
    )
}