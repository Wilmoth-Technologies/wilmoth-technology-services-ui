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

    const handleSectionNavigation = (sectionId, path) => (e) => {
        e.preventDefault();
        
        // Special case for home section when on contact page
        if (window.location.hash === '#/contact') {
            window.location.href = '/';
            window.location.hash = '';  // Clear the hash
            return;
        }

        // If we're not on the home page, redirect to home with hash
        if (window.location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
            return;
        }

        // If we're on the home page, scroll to section
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: 'HOME', path: '', onClick: handleSectionNavigation('home-section', '') },
        { name: 'SERVICES', path: '', onClick: handleSectionNavigation('services-section', '') },
        { name: 'PORTFOLIO', path: '', onClick: handleSectionNavigation('portfolio-section', '') },
        { name: 'TESTIMONIALS', path: '', onClick: handleSectionNavigation('testimonials-section', '') },
        { name: 'CONTACT', path: 'contact' }
    ];

    return (
        <div className={`fixed w-full z-50 ${hasScrolled ? 'p-0' : 'p-4'} transition-all duration-300`}>
            <nav className={`bg-white w-full ${hasScrolled ? '' : 'rounded-xl'}`}>
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" onClick={handleSectionNavigation('home-section', '')}>
                            <Logo />
                        </Link>
                        
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="hover:text-olive-green font-bold transition-colors"
                                    onClick={link.onClick || (() => setIsMenuOpen(false))}
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
                                    onClick={link.onClick || (() => setIsMenuOpen(false))}
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