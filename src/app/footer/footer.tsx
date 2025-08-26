import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
    <footer className="bg-[#0c3a3a] text-[#a9b1b1] p-6 rounded-t-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Logo and text */}
        <div className="max-w-xs">
            <Image
            src="/ad9074cc-ef16-45a4-9240-f9c6f8649fdd.png"
            alt="HavenUp Real Estate Logo"
            width={140}
            height={50}
            className="mb-4"
            />
            <p className="text-xs leading-relaxed">
            Querido usuario acepta las políticas de HavenUp al buscar una experiencia inmobiliaria más clara, segura y tecnológica. Reconoce la
            necesidad de asesoría, recorridos virtuales y transparencia en el proceso. Al usar la plataforma, se compromete a interactuar de forma
            responsable y ética. Esta aceptación permite mejorar la conexión entre oferta y demanda de vivienda.
            </p>
            <p className="text-xs mt-8">*2025 Dterms. All Rights reserved</p>
        </div>

        {/* Links */}
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

        {/* Others column 1 */}
        <nav className="flex flex-col space-y-4 min-w-[140px]" aria-label="Others">
            <h4 className="text-white border-l-2 border-[#66CDAA] pl-2 mb-2">Others</h4>
            <a href="#" className="hover:text-white text-sm">
            Terms and Of Services
            </a>
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

        {/* Others column 2 with social icons */}
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

export default Footer