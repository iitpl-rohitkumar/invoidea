import React from 'react';

export const WiderAudienceSection: React.FC = () => {
  return (
    <section className="industry-reach-wider-audience-wrapper ptb  pb-lg-0 border-bg " style={{"background":"url(/assets/taxi-booking-wider.webp)","backgroundPosition":"center","backgroundSize":"cover","backgroundAttachment":"fixed"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <div>
                    <h2 className="subheading">Travel Booking Application Development</h2>
                    <h3 className="industry-main-heading text-white heading-2">
                        Create Your <span style={{"color":"#17B4C8"}}>Travel App</span>
                        Today and Simplify the Way People Book Trips!
                    </h3>
                </div>
                <ul>
                    <li>
                        Reach more customers with a scalable travel app designed for multiple markets and destinations.
                    </li>
                    <li>
                        Simplify bookings, payments and itinerary management through a centralized platform.
                    </li>
                    <li>
                        Increase conversions with competitive pricing, exclusive offers and a seamless booking process.
                    </li>
                    <li>
                        Reduce operational costs by automating routine tasks and streamlining travel management.
                    </li>
                </ul>
                <button type="button" className="octf-btn rounded" data-bs-toggle="modal" data-bs-target="#consultation-modal" aria-label="Open consultation form" style={{"backgroundColor":"#17B4C8","borderColor":"#17B4C8","color":"#fff"}}>Let’s Have a
                    Discussion</button>
            </div>
            <div className="col-lg-5  d-lg-block d-none position-relative text-end">
                <img src="/assets/travel-app-development-bottom-img.webp" alt="travel-app-development-company-in-india services" className="img-fluid" />
            </div>
        </div>
    </div>
</section>
  );
};
