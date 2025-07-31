import { FaCheckCircle, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ContactReceived() {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen pt-24 overflow-hidden">
            {/* Header Section */}
            <div className="relative w-full">
                <div className="absolute left-1/2 -translate-x-1/2" style={{ width: '150%' }}>
                    <div className="bg-olive-green h-[350px] md:h-[400px] rounded-b-[50%] transform -translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 text-center mb-16 relative">
                    <div className="flex justify-center mb-6">
                        <div className="bg-white p-2 lg:p-4 rounded-full">
                            <FaCheckCircle className="w-8 h-8 lg:w-16 lg:h-16 text-green-500" />
                        </div>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                        Message Sent Successfully!
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 mb-20 mt-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                                What Happens Next?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                                <div className="text-center">
                                    <div className="bg-olive-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">1</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Review Your Request</h3>
                                    <p className="text-gray-600">
                                        Our team will carefully review your project requirements and prepare a detailed response.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-olive-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">2</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Initial Consultation</h3>
                                    <p className="text-gray-600">
                                        We'll schedule a call or meeting to discuss your project in detail and answer any questions.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-olive-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">3</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Proposal & Timeline</h3>
                                    <p className="text-gray-600">
                                        You'll receive a comprehensive proposal with project timeline, deliverables, and pricing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gray-50 rounded-xl p-8 mb-8">
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                                Need Immediate Assistance?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center justify-center space-x-4">
                                    <FaPhone className="w-6 h-6 text-olive-green flex-shrink-0" />
                                    <div className="text-center md:text-left">
                                        <p className="font-semibold text-gray-800">Call Us</p>
                                        <a href="tel:+13362446595" className="text-olive-green hover:underline break-all">
                                            (336) 244-6595
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center space-x-4">
                                    <FaEnvelope className="w-6 h-6 text-olive-green flex-shrink-0" />
                                    <div className="text-center md:text-left min-w-0">
                                        <p className="font-semibold text-gray-800">Email Us</p>
                                        <a href="mailto:info@wilmothtechnologyservices.com" className="text-olive-green hover:underline break-all text-sm md:text-base">
                                            info@wilmothtechnologyservices.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="text-center space-y-4">
                            <Link
                                to="/"
                                className="inline-block bg-olive-green text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors mr-4"
                            >
                                Return to Home
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors"
                            >
                                Send Another Message
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 