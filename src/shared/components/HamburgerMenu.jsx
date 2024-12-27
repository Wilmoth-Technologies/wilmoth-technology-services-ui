export default function HamburgerMenu({ isOpen, toggleMenu }) {
    return (
        <button 
            onClick={toggleMenu}
            className="lg:hidden p-2"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
            <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'rotate-[45deg] translate-y-[9px]' : ''}`}></span>
                <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? '-rotate-[45deg] -translate-y-[9px]' : ''}`}></span>
            </div>
        </button>
    );
} 