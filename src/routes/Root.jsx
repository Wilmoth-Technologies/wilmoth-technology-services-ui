import laptopMobileImage from '/LapTopAndMobile.png'
// Import icons for services
import { FaRocket, FaChartLine, FaGoogle, FaFlagUsa, FaHourglassHalf, FaStar, FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { MdDevices } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";


export default function Root() {
    // Define services data
    const services = [
        {
            icon: <CiMobile3 className="w-12 h-12" />,
            title: "MOBILE FIRST DESIGN",
            description: "We start building your site for mobile devices first making sure the code is as lean and optimized with no bloated waste and makes the site even more responsive.",
            link: "Get Started",
            href: "/contact"
        },
        {
            icon: <MdDevices className="w-12 h-12" />,
            title: "FULLY RESPONSIVE",
            description: "Your website will fit all mobile screens sizes, tablets, and desktop sizes so visitors can access your site from anywhere and see a beautiful site no matter the screen size.",
            link: "Get Started",
            href: "/contact"
        },
        {
            icon: <FaRocket className="w-12 h-12" />,
            title: "OPTIMIZED PAGE SPEED",
            description: "If your site takes more than 3 seconds to load you can lose up to 50% your traffic because it took too long. Our sites load 1 second or less ensuring everyone that visits your site reaches it.",
            link: "More About Page Speed",
            href: "/services#page-speed"
        },
        {
            icon: <FaChartLine className="w-12 h-12" />,
            title: "SEO SERVICES",
            description: "We have an in-house SEO specialist who understands local SEO and how to rank in your local market with plenty of case studies to show results and monthly reports.",
            link: "More About SEO",
            href: "/services#seo"
        },
        {
            icon: <FaGoogle className="w-12 h-12" />,
            title: "GOOGLE PPC ADS",
            description: "We also offer Pay-Per-Click Google ads creation and management with our Google Ads expert who can create effective ad campaigns to maximize your ROI.",
            link: "More About Ads",
            href: "/services#ppc"
        },
        {
            icon: <FaFlagUsa className="w-12 h-12" />,
            title: "BASED IN THE USA",
            description: "We do not hire cheap overseas developers. We are mostly based in the USA with team members in Washington, Texas, Pennsylvania, and the UK and work 100% remote from home.",
            link: "More About Us",
            href: "/about"
        }
    ];

    return (
        <>
            {/* Hero section with semi-circle background */}
            <div className="relative min-h-[80vh] lg:min-h-[75vh] overflow-hidden">
                {/* Semi-circle background */}
                <div className="absolute top-0 left-0 right-0 w-full h-full -z-10">
                    <div className="absolute w-[150vw] h-full bg-olive-green rounded-b-[100%] -left-[25vw]" />
                </div>
                
                {/* Content container with responsive layout */}
                <div className="container mx-auto px-4 pt-24 lg:pt-32 pb-16 lg:pb-24">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                        {/* Text content - reduced max width */}
                        <div className="text-white max-w-xl text-center lg:text-left lg:w-5/12">
                            <h1 className="text-5xl font-bold mb-6">
                                Technology Solutions That Just Work
                            </h1>
                            <p className="text-xl mb-8">
                                We transform businesses through custom web applications, websites, IoT solutions, 
                                and intelligent integrations that optimize your workflow and maximize efficiency.
                            </p>
                            {/* Button container - always in row */}
                            <div className="flex flex-row gap-4 justify-center lg:justify-start">
                                <button className="bg-chartreuse text-olive-dark px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                                    GET STARTED
                                </button>
                                <button className="bg-white text-olive-dark px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                    ABOUT US
                                </button>
                            </div>
                        </div>

                        {/* Image - adjusted container and sizing */}
                        <div className="lg:flex-1 lg:w-7/12">
                            <img 
                                src={laptopMobileImage} 
                                alt="Laptop and mobile device mockup" 
                                className="w-full max-w-2xl mx-auto lg:max-w-none lg:w-[115%]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* What We Do Section */}
            <div className="container mx-auto px-4 py-12 lg:py-20 text-center">
                <h2 className="text-gray-600 text-xl md:text-2xl uppercase tracking-wider mb-4 font-bold">What We Do</h2>
                <h3 className="text-3xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
                    YOUR TECHNOLOGY PARTNER IN BUSINESS TRANSFORMATION
                </h3>
                {/* Transform Your Operations While We Perfect Every Integration
                    Transform Your Business With Smart Solutions That Work
                    We Engineer The Solutions. You Engineer Success.
                    We Handle Every Integration. You Handle Business Growth. */}
                <p className="text-xl max-w-3xl mx-auto mt-8">
                    At Wilmoth Technology Services, we specialize in transforming businesses through custom digital solutions that span web applications, IoT systems, and intelligent integrations. Every solution is meticulously crafted to optimize your workflow and maximize efficiency, ensuring your business operates at its full potential. We build lasting partnerships with our clients, managing and evolving your technology ecosystem as your business grows. Our commitment goes beyond just delivering solutions – we're dedicated to seeing your business thrive through smart technology that works for you, not against you.
                </p>
            </div>

            {/* Services Grid Section */}
            <div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="relative pt-12">
                                {/* Icon container - positioned absolutely to overlap */}
                                <div className="absolute -top-2 left-8">
                                    <div className="bg-olive-green p-4 rounded-xl shadow-lg">
                                        <div className="text-white">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content card - added fixed height */}
                                <div className="bg-gray-100 p-8 pt-16 rounded-xl h-[350px] lg:h-[300px] flex flex-col">
                                    <h3 className="text-xl font-bold mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 font-semibold mb-6 flex-grow">
                                        {service.description}
                                    </p>
                                    <div>
                                        <a href={service.href} className="text-olive-green font-semibold hover:underline inline-block border-b-2 border-olive-green">
                                            {service.link}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call Us Today Button */}
                    <div className="flex justify-center mt-12">
                        <a 
                            href="/contact" 
                            className="bg-olive-green text-white px-12 py-4 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                        >
                            CALL US TODAY
                        </a>
                    </div>
                </div>
            </div>

            {/* Portfolio Section */}
            <div className='bg-gray-100 mt-6 pb-6'>
            <div className="container mx-auto px-4 py-4">
                {/* Header */}
                <div className="mb-3">
                    <p className="text-gray-600 text-xl uppercase tracking-widest font-semibold">PORTFOLIO</p>
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        <h2 className="text-4xl lg:text-5xl font-extrabold max-w-2xl">
                            SOME OF THE WORK WE'VE DONE OVER THE YEARS
                        </h2>
                        <p className="text-gray-700 lg:max-w-xl border-l-2 border-olive-green pl-4">
                            We have partnered with diverse businesses across the US, delivering custom web applications, IoT solutions, and intelligent integrations. We specialize in creating technology solutions that streamline operations and drive efficiency. Our expertise spans industries, ensuring each solution is perfectly tailored to your specific business needs and workflow requirements.
                        </p>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="flex justify-center">
                    {/* Mayberry Mini Trucks */}
                    <div className="flex flex-col gap-3 max-w-lg">
                        <div className="relative">
                            <img 
                                src="/MayberryMiniTrucksPortfolio.png" 
                                alt="Mayberry Mini Trucks website" 
                                className="w-full rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">MAYBERRY MINI TRUCKS</h3>
                            <p className="text-gray-700 mb-6">
                                Mayberry Mini Trucks started as a small family-owned business in 2010. Through the years of growth, we are still just as passionate about providing quality, cost effective mini trucks for our customers. We take pride in providing our customers with top notch service as we bring them through the process of finding their mini truck with ease, so they can have the best experience possible.
                            </p>
                            <div className="flex justify-center">
                                <a 
                                    href="https://mayberryminitrucks.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-olive-green text-white px-8 py-3 rounded-full inline-block font-bold hover:bg-opacity-90 transition-colors"
                                >
                                    VISIT WEBSITE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* Performance Section */}
            <div className="bg-olive-green text-white py-6">
                <div className="container mx-auto px-4">
                    {/* Desktop Layout */}
                    <div className="hidden lg:block">
                        <div className="flex justify-between items-start mb-12">
                            {/* Left side - Title */}
                            <div className="w-1/2">
                                <p className="text-xl uppercase tracking-widest font-semibold">PERFORMANCE</p>
                                <h2 className="text-4xl lg:text-5xl font-bold">
                                    WE BUILD <span className="text-chartreuse">BETTER</span> SOLUTIONS THAT PERFORM
                                </h2>
                            </div>

                            {/* Right side - Stats */}
                            <div className="w-1/2">
                                <div className="grid grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <p className="text-chartreuse text-6xl font-bold mb-2">100%</p>
                                        <p className="text-lg">Satisfaction Guaranteed</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-chartreuse text-6xl font-bold mb-2">100</p>
                                        <p className="text-lg">Page Speed Scores</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-chartreuse text-6xl font-bold mb-2">&lt;1s</p>
                                        <p className="text-lg">Response Times</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden mb-8">
                        <p className="text-xl uppercase tracking-widest font-semibold">PERFORMANCE</p>
                        <h2 className="text-4xl font-bold mb-8">
                            WE BUILD <span className="text-chartreuse">BETTER</span> SOLUTIONS THAT PERFORM
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Content */}
                        <div className="lg:w-1/2">
                            <p className="text-lg mb-8 leading-snug">
                                When it comes to website load times, not very many can get the Google PageSpeed scores that we get with each and every site. Test your website load times with Google PageSpeed Insights and see what your current site is scoring right now.
                            </p>
                            
                            {/* Benefits List */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <FaHourglassHalf className="w-6 h-6" />
                                    </div>
                                    <p className="text-lg">
                                        Better load times means more traffic and more site conversions over time.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <FaStar className="w-6 h-6" />
                                    </div>
                                    <p className="text-lg">
                                        Faster websites can help improve SEO and your Google ads performance.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <MdDevices className="w-6 h-6" />
                                    </div>
                                    <p className="text-lg">
                                        Our sites load instantly in under 1 second or less, which leads to a better user experience and conversions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <a 
                                    href="/contact" 
                                    className="bg-chartreuse text-olive-dark px-8 py-4 rounded-full inline-block font-bold mt-8 hover:bg-citrus transition-colors"
                                >
                                    GET STARTED TODAY
                                </a>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-1/2">
                            {/* Mobile-only Stats */}
                            <div className="lg:hidden grid grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <p className="text-chartreuse text-4xl font-bold mb-2">100%</p>
                                    <p className="text-lg">Satisfaction Guaranteed</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-chartreuse text-4xl font-bold mb-2">100</p>
                                    <p className="text-lg">Page Speed Scores</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-chartreuse text-4xl font-bold mb-2">5/5</p>
                                    <p className="text-lg">Google Reviews</p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="flex items-center lg:-mt-12">
                                <img 
                                    src="/GooglePageSpeed.avif" 
                                    alt="Google PageSpeed Insights showing perfect scores" 
                                    className="w-full rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-gray-600 text-xl uppercase tracking-widest mb-4">TESTIMONIALS</p>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                            TRUSTED WEB DESIGNER<br />
                            ACROSS THE COUNTRY
                        </h2>
                        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
                            We have helped small business owners all over the US and Canada get the website they 
                            have been wanting for years. We are invested in our clients just as much as they are in our 
                            work. When you work with Oak Harbor Web Designs, you aren't just working with an 
                            agency, you're working with a dedicated partner.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="text-navy-blue text-4xl mb-6">"</div>
                            <p className="text-gray-700 mb-8">
                                Ryan and his team have been awesome to work with. 
                                The value they provide for the cost is unbeatable. 
                                Ryan is talented and responsive. I highly recommend 
                                him for your website needs!
                            </p>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">MICHAEL M.</h3>
                                <p className="text-gray-600">Salt Lake City, UT</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="text-navy-blue text-4xl mb-6">"</div>
                            <p className="text-gray-700 mb-8">
                                Oak Harbor and Ryan have made the process of 
                                building a website a fun, exciting experience. He is 
                                very personable and answers your questions within a 
                                quick manner. I'll be using him in the future.
                            </p>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">CLARK P.</h3>
                                <p className="text-gray-600">Sacramento, CA</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="text-navy-blue text-4xl mb-6">"</div>
                            <p className="text-gray-700 mb-8">
                                I approached Ryan with a very specific vision for our 
                                new website, and he knocked it out of the park. I was 
                                looking for a clean, original design and a faster site. 
                                He absolutely delivered.
                            </p>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">SCOTT S.</h3>
                                <p className="text-gray-600">Atlanta, GA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Banner with Billboard and Wave */}
            <div className="relative bg-white py-32">
                {/* Billboard structure with shadow - flipped */}
                <div className="relative max-w-[1200px] mx-auto mb-20" style={{ transform: 'rotate(180deg)' }}>
                    {/* Left post */}
                    <div className="absolute left-0 -top-48 h-[calc(100%+80px)] w-6 bg-olive-green"></div>
                    
                    {/* Right post */}
                    <div className="absolute right-0 -top-48 h-[calc(100%+80px)] w-6 bg-olive-green"></div>
                    
                    {/* Main content with shadow */}
                    <div className="bg-olive-green text-white py-16 px-4 shadow-2xl rounded-sm">
                        {/* Flip the content back right-side up */}
                        <div className="max-w-6xl mx-auto" style={{ transform: 'rotate(180deg)' }}>
                            <div className="flex flex-col lg:flex-row justify-between items-center">
                                <h2 className="text-4xl lg:text-5xl font-bold mb-8 lg:mb-0">
                                    READY TO BUILD THE SOLUTION<br />
                                    YOU ALWAYS WANTED?
                                </h2>
                                <a 
                                    href="/contact" 
                                    className="bg-chartreuse text-olive-dark px-8 py-3 rounded-full font-bold hover:bg-sky-500 transition-colors"
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
                        className="w-full h-24"
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
            <footer className="bg-olive-green text-white pt-0 pb-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Logo and Description */}
                        <div className="lg:col-span-1">
                            <img 
                                src="/oak-harbor-logo.png" 
                                alt="Oak Harbor Web Designs" 
                                className="mb-6 h-16"
                            />
                            <p className="text-gray-300 mb-8">
                                We believe small businesses deserve better. Just 
                                because you're small, doesn't mean your site needs 
                                to be. Let us make you something amazing.
                            </p>
                            <a 
                                href="/contact" 
                                className="bg-white text-navy-blue px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
                            >
                                GET STARTED TODAY
                            </a>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold mb-6">QUICK LINKS</h3>
                            <div className="grid grid-cols-2">
                                <div>
                                    <ul className="space-y-4">
                                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                                        <li><a href="/reviews" className="hover:text-gray-300">Reviews</a></li>
                                        <li><a href="/web-design" className="hover:text-gray-300">Web Design</a></li>
                                        <li><a href="/google-ppc-ads" className="hover:text-gray-300">Google PPC Ads</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="space-y-4">
                                        <li><a href="/about" className="hover:text-gray-300">About</a></li>
                                        <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
                                        <li><a href="/seo" className="hover:text-gray-300">SEO</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <h3 className="text-xl font-bold mb-6">CONTACT INFORMATION</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <FaClock className="w-4 h-4 text-gray-300" />
                                    <span className="text-gray-300">24/7</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaPhone className="w-4 h-4 text-gray-300" />
                                    <a href="tel:+3362446595" className="hover:text-gray-300">(336) 244-6595</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaEnvelope className="w-4 h-4 text-gray-300" />
                                    <a href="mailto:gabewilmoth@gmail.com" className="hover:text-gray-300">gabewilmoth@gmail.com</a>
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
}