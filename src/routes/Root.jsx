import laptopMobileImage from '/LapTopAndMobile.png'

export default function Root() {
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
                                <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                                    GET STARTED
                                </button>
                                <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
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
        </>
    );
}