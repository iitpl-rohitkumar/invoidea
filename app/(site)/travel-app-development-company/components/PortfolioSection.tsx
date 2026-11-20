import React from 'react';

export const PortfolioSection: React.FC = () => {
  return (
    <section className="ptb latest-works-section border-bg" style={{"background":"#000"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 mx-auto text-lg-center">
                <h2 className="subheading">TRAVEL APP DEVELOPMENT PORTFOLIO</h2>
                <h3 className="industry-main-heading heading-2 text-white">
                    <span style={{"color":"#17B4C8"}}>Travel App Development </span>
                    Solutions Built Around Real-World Travel Needs
                </h3>
            </div>
            <div className="col-lg-10 mx-auto text-lg-center mb-4">
                <p className="light-text">Explore our completed projects that demonstrate how custom travel applications can
                    simplify booking, personalize trip planning, and connect travelers with travel service providers.
                    Each solution can be tailored to your business model, target audience, and operational requirements.
                </p>
            </div>
        </div>
        <div className="row case-study-stack">
            <div className="col-lg-12">
                <div className="case-story-card" data-category="mobile">
                    <div className="case-story-img">
                        <img src="/assets/travel-app-case-study-1.webp" className="img-fluid" alt="Taxi Mobile App Development" />
                    </div>
                    <div className="case-story-content">
                        <h3>Custom Travel Booking App for Flights, Hotels &amp; Trips </h3>
                        <p className="my-2"><b>Mobile App | Travel Booking | Flight &amp; Hotel Search | Online Payments</b></p>
                        <p>A custom travel booking application designed to help users discover destinations, compare
                            travel options, book flights and accommodations, and manage trip details from one platform.
                            The app brings search, booking, payment, and itinerary management into a streamlined travel
                            experience.
                        </p>
                        <div className="case-stats mt-3">

                            <div className="case-box">
                                <div className="case-number">
                                    <i className="fas fa-arrow-up"></i>
                                    <h4 className="text-white">10K<span>+</span></h4>
                                </div>
                                <p>User Profiles</p>
                            </div>

                            <div className="case-box">
                                <div className="case-number">
                                    <i className="fas fa-arrow-up"></i>
                                    <h4 className="text-white">500<span>+</span></h4>
                                </div>
                                <p>Travel Listings</p>
                            </div>
                            <div className="case-box">
                                <div className="case-number">
                                    <i className="fas fa-arrow-up"></i>
                                    <h4 className="text-white">30<span>%</span></h4>
                                </div>
                                <p>Faster Booking Flow</p>
                            </div>

                        </div>
                        <div className=" tech mt-3 mb-3">
                            <span>React Native</span><span>Node.js</span><span>PostgreSQL</span><span>Cloud
                                Infrastructure</span><span>Payment Gateway APIs</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="case-story-card" data-category="mobile">
                    <div className="case-story-img">
                        <img src="/assets/travel-app-case-study-2.webp" className="img-fluid" alt="Taxi Mobile App Development" />
                    </div>
                    <div className="case-story-content">
                        <h3>AI-Powered Travel App for Personalized Trip Planning</h3>
                        <p className="my-2"><b>Mobile App | AI Recommendations | Trip Planner | Location-Based Services</b>
                        </p>
                        <p>An intelligent travel application that helps users explore destinations, discover relevant
                            attractions, and organize personalized itineraries based on their interests, travel dates,
                            and preferences. AI-powered recommendations and itinerary assistance make it easier to plan
                            trips and manage travel activities in one place.</p>
                        <div className="case-stats mt-3">

                            <div className="case-box">
                                <div className="case-number">
                                    <i className="fas fa-arrow-up"></i>
                                    <h4 className="text-white">5K<span>+</span></h4>
                                </div>
                                <p> Trip Plans Created</p>
                            </div>

                            <div className="case-box">
                                <div className="case-number">
                                    <i className="fas fa-arrow-up"></i>
                                    <h4 className="text-white">40<span>%</span></h4>
                                </div>
                                <p>Less Manual Trip Planning</p>
                            </div>
                            <div className="case-box">
                                <div className="case-number">
                                    <i className="fas fa-arrow-up"></i>
                                    <h4 className="text-white">3<span>X</span></h4>
                                </div>
                                <p>Faster Destination Discovery</p>
                            </div>

                        </div>
                        <div className=" tech mt-3 mb-3">
                            <span>React Native </span><span>Python</span><span>Node.js</span><span>AI/ML
                                APIs</span><span>Maps &amp; Places APIs</span><span>Cloud Services</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="case-story-card" data-category="mobile">
                    <div className="case-story-img">
                        <img src="/assets/travel-app-case-study-3.webp" className="img-fluid" alt="Taxi Mobile App Development" />
                    </div>
                    <div className="case-story-content">
                        <h3>Travel Marketplace App for Tour Packages &amp; Local</h3>
                        <p className="my-2"><b>Mobile App | Web Platform| Tour Packages| Vendor Management</b></p>
                        <p>A multi-vendor travel platform that connects travelers with tour operators, local guides, and
                            experience providers. Users can browse tour packages, review trip details, make bookings,
                            and manage reservations, while administrators and partners manage listings, availability,
                            and booking activity.</p>
                        <div className="case-stats mt-3">

                            <div className="case-box">
                                <div className="case-number">
                                    <i className="fas fa-arrow-up"></i>
                                    <h4 className="text-white">100<span>+</span></h4>
                                </div>
                                <p>Tour &amp; Experience Listings</p>
                            </div>

                            <div className="case-box">
                                <div className="case-number">
                                    <i className="fas fa-arrow-up"></i>
                                    <h4 className="text-white">25<span>+</span></h4>
                                </div>
                                <p>Travel Partners</p>
                            </div>
                            <div className="case-box">
                                <div className="case-number">
                                    <i className="fas fa-arrow-up"></i>
                                    <h4 className="text-white">35<span>%</span></h4>
                                </div>
                                <p>Faster Booking Administration</p>
                            </div>

                        </div>
                        <div className=" tech mt-3 mb-3">
                            <span>React.js</span><span>Node.js</span><span>PostgreSQL</span><span>Cloud
                                Infrastructure</span><span>Payment APIs </span><span>Third-Party Travel APIs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
  );
};
