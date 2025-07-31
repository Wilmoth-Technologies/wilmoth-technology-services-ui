import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            {/* CTA Banner with Billboard and Wave */}
            <div className="relative bg-white py-16 lg:py-32">
                {/* Billboard structure with shadow - flipped */}
                <div className="relative max-w-[1200px] mx-auto mb-12 lg:mb-20 px-4 lg:px-0" style={{ transform: 'rotate(180deg)' }}>
                    {/* Left post - moved inward */}
                    <div className="absolute left-[50px] lg:left-[50px] -top-28 lg:-top-48 h-[calc(100%+24px)] lg:h-[calc(100%+80px)] w-3 lg:w-6 bg-olive-green"></div>
                    
                    {/* Right post - moved inward */}
                    <div className="absolute right-[50px] lg:right-[50px] -top-28 lg:-top-48 h-[calc(100%+24px)] lg:h-[calc(100%+80px)] w-3 lg:w-6 bg-olive-green"></div>
                    
                    {/* Main content with shadow and rounded corners */}
                    <div className="bg-olive-green text-white py-8 lg:py-16 px-4 shadow-lg lg:shadow-2xl rounded-xl">
                        {/* Flip the content back right-side up */}
                        <div className="max-w-6xl mx-auto" style={{ transform: 'rotate(180deg)' }}>
                            <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
                                <h2 className="text-3xl lg:text-5xl font-bold mb-8 lg:mb-0">
                                    READY TO BUILD THE SOLUTION<br className="hidden lg:block" />
                                    YOU ALWAYS WANTED?
                                </h2>
                                <a 
                                    href="/#/contact" 
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="bg-chartreuse text-olive-dark px-8 py-3 rounded-full font-bold hover:bg-chartreuse hover:opacity-70 transition-colors"
                                >
                                    GET STARTED TODAY
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg 
                        className="w-full h-12 lg:h-24"
                        viewBox="0 0 1440 74" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        style={{ 
                            filter: 'drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.1))',
                            marginBottom: '-1px'
                        }}
                    >
                        <path 
                            d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 51.778 1243.09 50.0141C1099.33 46.9243 1019.08 15.2402 874.666 11.0479C710.965 6.24095 635.764 1.79308 456.464 0.0433865Z" 
                            fill="#556b2f"
                        />
                    </svg>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-olive-green text-white pt-0 pb-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Logo and Description */}
                        <div className="lg:col-span-1 flex flex-col items-center text-center">
                            <img 
                                src="/WTSLogoWhite.png" 
                                alt="WTS Logo"
                                className="mb-6 h-16"
                            />
                            <p className="mb-8 text-center max-w-sm">
                                Empowering businesses with custom solutions. We combine 
                                cutting-edge technology with creative design to help your 
                                business thrive in the digital world.
                            </p>
                            <div className="text-center">
                                <a 
                                    href="/#/contact" 
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="bg-chartreuse text-olive-dark px-8 py-3 rounded-full font-bold hover:bg-chartreuse hover:opacity-70 transition-colors inline-block"
                                >
                                    GET STARTED TODAY
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-6 text-center">QUICK LINKS</h3>
                            <ul className="space-y-4 text-center">
                                <li>
                                    <a 
                                        href="/" 
                                        onClick={() => window.scrollTo(0, 0)} 
                                        className="hover:text-chartreuse"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="/#/contact" 
                                        onClick={() => window.scrollTo(0, 0)} 
                                        className="hover:text-chartreuse"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <h3 className="text-2xl font-bold mb-6 text-center">CONTACT INFORMATION</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <FaClock className="w-4 h-4 text-gray-300" />
                                    <span className="text-gray-300">24/7</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaPhone className="w-4 h-4 text-gray-300" />
                                    <a href="tel:+3362446595" className="hover:text-chartreuse">(336) 244-6595</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaEnvelope className="w-4 h-4 text-gray-300" />
                                    <a href="mailto:info@wilmothtechnologyservices.com" className="hover:text-chartreuse">info@wilmothtechnologyservices.com</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="w-4 h-4 text-gray-300" />
                                    <span className="text-gray-300">United States</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            </>
    );
};