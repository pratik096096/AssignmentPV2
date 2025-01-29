import React from 'react';


const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Start-up Success Stories</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Chime</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Chime is a digital banking platform that offers customers easy-to-use financial services, including no-fee checking and savings accounts. Founded in 2013, Chime has grown into one of the most popular neobanks in the US, with millions of users. It focuses on helping people manage their finances without the fees and complexities of traditional banks.     </p>
                                <div className="flex justify-center my-4">
                                    
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Glossier</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Glossier is a beauty and skincare brand that was founded in 2014 by Emily Weiss. What began as a beauty blog, Into The Gloss, quickly turned into a beauty empire known for its minimalist and customer-centric products. Glossier uses social media and customer feedback to design products that resonate with its audience, turning it into a beloved brand in the beauty industry.   </p>
                                <div className="flex justify-center my-4">
                                    
                                </div>
                            
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Bumble</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Bumble is a dating app founded in 2014 by Whitney Wolfe Herd. Unlike other dating apps, Bumble empowers women by allowing them to make the first move when initiating conversations. The app has expanded beyond dating into friendship and networking, becoming one of the top alternatives to apps like Tinder.     </p>
                                <div className="flex justify-center my-4">
                                   
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Everlane</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Everlane, founded in 2010 by Michael Preysman, is a fashion brand focused on transparency, ethical sourcing, and sustainable production. The company offers a range of minimalist apparel and accessories while sharing detailed information about their supply chain, cost structure, and environmental impact. Everlane has built a loyal following by aligning with consumers who prioritize sustainability.   </p>
                                <div className="flex justify-center my-4">
                                   
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;