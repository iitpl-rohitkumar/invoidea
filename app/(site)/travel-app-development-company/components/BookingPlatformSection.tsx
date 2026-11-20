import React from 'react';

export const BookingPlatformSection: React.FC = () => {
  return (
    <section className="border-bg industry-app-development-wrapper">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
                <h2 className="subheading">Travel App Development Agency</h2>
                <h3 className="industry-main-heading heading-2 desktop-show">Launch Your Own Travel Booking Platform like
                    <span style={{"color":"#17B4C8","fontWeight":"800","textTransform":"capitalize"}}>Expedia, Booking.com &amp;
                        Tripadvisor</span>
                </h3>
                <h3 className="industry-main-heading heading-2 mobile-show">Launch Your Own Travel Booking Platform like
                    <span style={{"color":"#17B4C8","textTransform":"capitalize"}}>Expedia, Booking.com &amp; Tripadvisor</span>
                </h3>
                <p className="text-muted mt-3">Develop a travel booking platform that brings flights, hotels, holiday
                    packages and travel experiences together in one place. We build custom travel applications for
                    online travel agencies, booking businesses and multi-vendor marketplaces. From real-time
                    availability and booking management to secure payments, itinerary planning, and third-party API
                    integrations, every feature is tailored to your business requirements. Whether you want to launch a
                    platform like Expedia, Booking.com, or Tripadvisor, or expand an existing travel business, we help
                    you create a scalable solution that simplifies travel planning, enhances customer convenience, and
                    supports long-term growth.</p>
                <button type="button" className="btn theme-btn" data-bs-toggle="modal" data-bs-target="#consultation-modal" aria-label="Open consultation form">Let's Have a Discussion</button>

            </div>
            <div className="col-lg-6 col-md-6 text-center mt-lg-0 mt-3 col-5">
                <img src="/assets/travel-booking-app-img.webp" alt="travel-app-development-company-in-india company" className="img-fluid" />
            </div>
        </div>
    </div>
</section>
  );
};
