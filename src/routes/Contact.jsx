import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    const contactMethods = [
        {
            icon: <FaPhone className="w-8 h-8" />,
            title: "PHONE",
            info: "(336) 244-6595",
            description: "Call us anytime to discuss your project needs.",
            action: "tel:+13362446595",
            buttonText: "CALL NOW"
        },
        {
            icon: <FaEnvelope className="w-8 h-8" />,
            title: "EMAIL",
            info: "gabewilmoth@gmail.com",
            description: "We'll respond within 24 hours.",
            action: "mailto:gabewilmoth@gmail.com",
            buttonText: "EMAIL US"
        },
        {
            icon: <FaClock className="w-8 h-8" />,
            title: "HOURS",
            info: "24/7",
            description: "We provide round-the-clock support for our clients.",
            action: null
        },
        {
            icon: <FaMapMarkerAlt className="w-8 h-8" />,
            title: "LOCATION",
            info: "United States",
            description: "Serving clients nationwide with custom technology solutions.",
            action: null
        }
    ];

    return (
        <div className="min-h-screen pt-24 overflow-hidden">
            {/* Header Section - Adjusted circle size */}
            <div className="relative w-full">
                <div className="absolute left-1/2 -translate-x-1/2" style={{ width: '150%' }}>
                    <div className="bg-olive-green h-[350px] md:h-[400px] rounded-b-[50%] transform -translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 text-center mb-16 relative">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                        GET IN TOUCH
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Ready to transform your business with custom technology solutions? 
                        Contact us today to discuss your project needs.
                    </p>
                </div>
            </div>

            {/* Adjusted margin to match new circle size */}
            <div className="container mx-auto px-4 mb-20 mt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {contactMethods.map((method, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-50 p-8 rounded-xl flex flex-col items-center text-center"
                        >
                            <div className="bg-olive-green p-4 rounded-xl mb-6">
                                <div className="text-white">
                                    {method.icon}
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold mb-2">{method.title}</h2>
                            <p className="text-xl mb-4">{method.info}</p>
                            <p className="text-gray-600 mb-6">{method.description}</p>
                            {method.action && (
                                <a 
                                    href={method.action}
                                    className="bg-olive-green text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                                >
                                    {method.buttonText}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 