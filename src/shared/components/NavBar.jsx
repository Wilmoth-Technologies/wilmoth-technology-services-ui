import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT US', path: '/about' },
        { name: 'SERVICES', path: '/services' },
        { name: 'PORTFOLIO', path: '/portfolio' },
        { name: 'CONTACT', path: '/contact' }
    ];

    return (
        <div className={`fixed w-full z-50 ${hasScrolled ? 'p-0' : 'p-4'} transition-all duration-300`}>
            <nav className={`bg-white w-full ${hasScrolled ? '' : 'rounded-xl'}`}>
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <Logo />
                        
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="hover:text-olive-green font-bold transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <HamburgerMenu 
                            isOpen={isMenuOpen} 
                            toggleMenu={() => setIsMenuOpen(!isMenuOpen)} 
                        />
                    </div>

                    {/* Mobile Menu */}
                    <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 bg-white`}>
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="hover:text-olive-green font-bold transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}