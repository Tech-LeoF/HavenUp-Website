import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer(){
    return (
    <footer style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-[#0c3a3a] text-[#a9b1b1] p-6 rounded-t-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        
        <div className="max-w-xs">
            <Image
            src="/Imgs/Logo-BG.png"
            alt="HavenUp Real Estate Logo"
            width={140}
            height={50}
            className="sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full object-cover mb-4"
            />
            <p className="text-xs leading-relaxed">
            Dear user, you accept the policies of HavenUp when seeking a clearer, safer, and more technological real estate experience. You recognize the need for advice, virtual tours, and transparency in the process. By using the platform, you commit to interacting responsibly and ethically. This acceptance allows for better connection between the supply and demand for housing.
            </p>
            <p className="text-xs mt-8">{'\u00A9'} 2026 terms. All Rights reserved</p>
        </div>


        <nav className="flex flex-col space-y-4 min-w-[120px]" aria-label="Links">
            <h4 className="text-white border-l-2 border-[#66CDAA] pl-2 mb-2">Links</h4>
            <a href="#" className="hover:text-white text-sm">
            Home
            </a>
            <a href="#" className="hover:text-white text-sm">
            Get Started
            </a>
            <a href="#" className="hover:text-white text-sm">
            Services
            </a>
            <a href="#" className="hover:text-white text-sm">
            Corporate
            </a>
        </nav>

    
        <nav className="flex flex-col space-y-4 min-w-[140px]" aria-label="Others">
            <h4 className="text-white border-l-2 border-[#66CDAA] pl-2 mb-2">Others</h4>
            <Link href='/terms'>
            Terms of Services
            </Link>
            
            
            <a href="#" className="hover:text-white text-sm">
            Privacy Police
            </a>
            <a href="#" className="hover:text-white text-sm">
            Something goes here
            </a>
            <a href="#" className="hover:text-white text-sm">
            Corporate
            </a>
        </nav>

        
        <div className="flex flex-col space-y-4 min-w-[140px]">
            <h4 className="text-white border-l-2 border-[#66CDAA] pl-2 mb-2">Others</h4>
            <p className="text-sm mb-2">Follow Us & Us On Social Media</p>
            <div className="flex space-x-4 text-[#a9b1b1] hover:text-white">
            <a href="#" aria-label="Facebook" className="text-lg">
                <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="text-lg">
                <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="text-lg">
                <FaYoutube />
            </a>
            <a href="#" aria-label="TikTok" className="text-lg">
                <FaTiktok />
            </a>
            </div>
        </div>
    </div>
    </footer>
    )
}