import React from 'react';

export const CoreServicesSection: React.FC = () => {
  return (
    <section className="ptb border-bg ">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8 mx-auto text-center">
                <div className="px-lg-4">
                    <h2 className="industry-main-heading heading-2"><span style={{"color":"#17B4C8"}}>Traveler App </span>
                        for Smarter Property Search, Sales &amp; Management</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="pt-4">
        <div className="container ">
            <div className="row px-0">
                <div className="col-lg-12 px-0">
                    <div className="mx-auto text-center">
                        <img src="/assets/travel_core_service_image.webp" className="img-fluid" alt="travel-app-development-company-in-india" />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className=" industry-core-service-box px-lg-3">
                        <h4>
                            Traveler App
                        </h4>
                        <p className="text-muted">
                            We bring essential travel services together in one intuitive app, making every step from
                            discovery to departure easier.
                        </p>
                        <button style={{"border":"1px solid #16b2c6","background":"rgb(22 178 198 / 14%)"}}>
                            <a href="#customer-app-development" style={{"color":"#16b2c6","padding":"13px 38px"}}>Know
                                More</a>
                        </button>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4">
                    <div className="industry-core-service-box px-lg-3">
                        <h4>
                            Vendor App
                        </h4>
                        <p className="text-muted">
                            Our vendor apps simplify booking management, inventory updates, pricing, package
                            listings and customer communication through a unified interface. </p>
                        <button style={{"border":"1px solid #16b2c6","background":"rgb(22 178 198 / 14%)"}}>
                            <a href="#delivery-app-development" style={{"color":"#16b2c6","padding":"13px 38px"}}>Know
                                More</a>
                        </button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="industry-core-service-box px-lg-3">
                        <h4>
                            Admin App
                        </h4>
                        <p className="text-muted">
                            Oversee users, vendor activities, bookings, payments, commissions and platform content
                            while tracking performance and maintaining operational control.
                        </p>
                        <button style={{"border":"1px solid #16b2c6","background":"rgb(22 178 198 / 14%)"}}>
                            <a href="#admin-dashboard-development" style={{"color":"#16b2c6","padding":"13px 38px"}}>Know
                                More</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};
