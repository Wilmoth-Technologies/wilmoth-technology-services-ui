import laptopMobileImage from '/LapTopAndMobile.png'
// Import icons for services
import { FaRocket, FaChartLine, FaGoogle, FaHourglassHalf, FaStar, FaClock } from 'react-icons/fa'
import { MdDevices } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";


export default function Root() {
    // Define services data
    const services = [
        {
            icon: <CiMobile3 className="w-12 h-12" />,
            title: "MOBILE FIRST DESIGN",
            description: "We prioritize the mobile experience first, ensuring your website looks and works beautifully on phones and tablets. This means your visitors get fast, smooth performance whether they're on the go or at their desk.",
            link: "Get Started",
            href: "/contact"
        },
        {
            icon: <FaRocket className="w-12 h-12" />,
            title: "OPTIMIZED PAGE SPEED",
            description: "Research shows that 50% of visitors abandon websites that take more than 3 seconds to load. Our optimized sites consistently achieve sub-second load times, ensuring maximum visitor retention and engagement.",
            link: "More About Page Speed",
            href: "#performance-section"
        },
        {
            icon: <FaChartLine className="w-12 h-12" />,
            title: "SEO SERVICES",
            description: "We know Seach Engine Optimization and deliver proven results through data-driven strategies. We provide comprehensive monthly reporting and maintain a strong track record of improving local rankings.",
            link: "More About SEO",
            href: "#performance-section"
        },
        {
            icon: <FaGoogle className="w-12 h-12" />,
            title: "GOOGLE PPC ADS",
            description: "We offer Pay-Per-Click Google ads creation and management services to create effective ad campaigns that maximize your ROI.",
            link: "More About Ads",
            href: "#performance-section"
        },
        {
            icon: <MdDevices className="w-12 h-12" />,
            title: "CROSS-PLATFORM SOLUTIONS",
            description: "We develop solutions that work across all platforms - from web and mobile applications to IoT devices and custom integrations. Our technology stack ensures consistent performance across your entire digital ecosystem.",
            link: "Get Started",
            href: "/contact"
        },
        {
            icon: <FaClock className="w-12 h-12" />,
            title: "24/7 SUPPORT & MONITORING",
            description: "We provide round-the-clock monitoring and support for your digital infrastructure. Our dedicated team ensures your systems run smoothly, responding quickly to any issues and maintaining peak performance.",
            link: "Get Started",
            href: "/contact"
        }
    ];

    return (
        <>
            {/* Hero section with semi-circle background */}
            <div id="home-section" className="relative min-h-[80vh] lg:min-h-[75vh] overflow-hidden">
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
                                <a 
                                    href="/contact" 
                                    className="bg-chartreuse text-olive-dark px-8 py-3 rounded-full font-bold hover:bg-chartreuse hover:opacity-70 transition-colors"
                                >
                                    GET STARTED
                                </a>
                                <button 
                                    onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-white text-olive-dark px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                                >
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
            <div id="services-section" className="container mx-auto px-4 py-12 lg:py-20 text-center">
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

                                {/* Content card - updated link to handle smooth scroll */}
                                <div className="bg-gray-100 p-8 pt-16 rounded-xl h-[350px] lg:h-[300px] flex flex-col">
                                    <h3 className="text-xl font-bold mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 font-semibold mb-6 flex-grow">
                                        {service.description}
                                    </p>
                                    <div>
                                        <a 
                                            href={service.href} 
                                            className="text-olive-green font-semibold hover:underline inline-block border-b-2 border-olive-green"
                                            onClick={(e) => {
                                                if (service.href.startsWith('#')) {
                                                    e.preventDefault();
                                                    document.querySelector(service.href).scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                        >
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
            <section id="portfolio-section">
            <div  className='bg-gray-100 mt-6 pb-6'>
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
            </section>

            {/* Performance Section */}
            <div className="bg-olive-green text-white py-6" id="performance-section">
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
                                From lightning-fast websites to high-performance applications and IoT systems, we consistently deliver solutions that exceed industry standards. Our web platforms achieve perfect Google PageSpeed scores, while our custom applications and integrations maintain sub-second response times. Test your current website's performance with Google PageSpeed Insights to see how we can help improve your digital presence.
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
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <FaRocket className="w-6 h-6" />
                                    </div>
                                    <p className="text-lg">
                                        Custom IoT systems and integrations that maintain sub-second response times for optimal performance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <a 
                                    href="/contact" 
                                    className="bg-chartreuse text-olive-dark px-8 py-4 rounded-full inline-block font-bold mt-8 hover:bg-chartreuse hover:opacity-70 transition-colors"
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
            <div className="py-20" id="testimonials-section">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-gray-600 text-xl uppercase tracking-widest mb-4">TESTIMONIALS</p>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                            TRUSTED TECHNOLOGY PARTNER<br />
                            FOR GROWING BUSINESSES
                        </h2>
                        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
                            We help businesses transform their operations through custom technology solutions 
                            that drive real results. We're invested in our clients' success and work as an 
                            extension of their team. When you work with Wilmoth Technology Services, you're 
                            partnering with dedicated experts who understand your business needs.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="flex justify-center">
                        {/* Testimonial 1 */}
                        <div className="bg-gray-50 p-8 rounded-lg max-w-xl">
                            <p className="text-gray-700 mb-8">
                                Wilmoth Technology Services approached us with a solution for redesigning how customers 
                                interact with our inventory. They delivered a fully custom solution that allows us to 
                                track and target customer bases and also fully manage our online inventory presence 
                                like never before.
                            </p>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">Mayberry Mini Trucks</h3>
                                <p className="text-gray-600">Mount Airy, NC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}