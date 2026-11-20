import React from 'react';

export const SolutionBannerSection: React.FC = () => {
  return (
    <section className="industry-main-heading-banner border-bg position-relative  ptb secondry-gradient-bg " style={{"overflow":"hidden"}}>
    <div className="bg-image desktop-show">
        <img src="/assets/travel-app-build-banner.webp" alt="travel-app-development-company-in-india" className="img-fluid position-absolute top-0 start-0 w-100 object-fit-cover" />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-7 offset-lg-1">
                <div className="d-lg-block d-none">
                    <h6 className="big-font d-lg-block d-none mt-3rem" style={{"marginTop":"3rem"}}>TRAVEL APP DEVELOPMENT
                        Agency</h6>
                </div>
                <div className=" fw-600">
                    <h2 className="subheading mob-white-text">Best TRAVEL APP DEVELOPMENT Agency</h2>
                </div>
                <h3 className="heading-2 text-black industry-main-heading">Build Your App With Our
                    Top<br /> <span className="border-white text-white" style={{"color":"#0C77BD"}}>Travel App Development</span>
                    <br />Solution!
                </h3>
                <p className="text-muted">
                    Give your customers a simpler way to discover destinations, compare travel options, and manage
                    their trips from one convenient platform. At Invoidea, we build custom travel applications
                    tailored to your business goals, target audience, and operational requirements. From destination
                    discovery and itinerary planning to hotel bookings, secure payments, and real-time travel
                    updates, we develop features that make the entire travel experience more convenient and
                    accessible.</p>
                <p className="text-muted">Our travel app development services focus on intuitive design, seamless
                    third-party integrations, and scalable architecture to support your growing business. Whether
                    you operate a travel agency, tour company, hotel booking platform, or online travel business, we
                    create solutions that simplify travel planning, improve customer engagement, and support
                    long-term business growth.</p>
            </div>
        </div>
    </div>
</section>
  );
};
