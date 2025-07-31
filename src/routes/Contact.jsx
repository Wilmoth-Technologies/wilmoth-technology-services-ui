import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitContactForm, validateEmail, validatePhone, sanitizeFormData } from '../shared/AppFunctions';

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

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
            info: "info@wilmothtechnologyservices.com",
            description: "We'll respond within 24 hours.",
            action: "mailto:info@wilmothtechnologyservices.com",
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



    const scrollToError = (fieldName) => {
        const element = document.getElementById(fieldName);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            element.focus();
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        // Phone validation - required
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
        
        setErrors(newErrors);
        
        // Scroll to first error
        if (Object.keys(newErrors).length > 0) {
            const firstErrorField = Object.keys(newErrors)[0];
            setTimeout(() => scrollToError(firstErrorField), 100);
        }
        
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const sanitizedData = sanitizeFormData(formData);
            await submitContactForm(sanitizedData);
            
            // Redirect to success page
            navigate('/contact-received');
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ submit: 'Failed to submit form. Please try again or contact us directly at info@wilmothtechnologyservices.com.' });
        } finally {
            setIsSubmitting(false);
        }
    };

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

            {/* Contact Form Section */}
            <div className="container mx-auto px-4 mb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                                Send Us a Message
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent transition-colors ${
                                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your first name"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent transition-colors ${
                                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your last name"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            {/* Contact Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent transition-colors ${
                                            errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your email address"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent transition-colors ${
                                            errors.phone ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your phone number (e.g., 336-244-6595)"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                    )}
                                    <p className="text-gray-500 text-xs mt-1">
                                        Format: (123) 456-7890 or 123-456-7890
                                    </p>
                                </div>
                            </div>



                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Project Details *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="6"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent transition-colors resize-none ${
                                        errors.message ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit Error */}
                            {errors.submit && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <p className="text-red-600 text-sm">{errors.submit}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-olive-green text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 ${
                                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Message...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Contact Methods Section */}
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