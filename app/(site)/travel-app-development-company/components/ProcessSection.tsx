import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="success-section position-relative ptb">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 mx-auto text-lg-center">
                <h2 className="subheading">CUSTOM TRAVEL APP DEVELOPMENT</h2>
                <h3 className="heading-2">Our Travel App Development Process</h3>
                <p className="text-muted">As a travel app development company in India, we follow a structured process from
                    the initial idea to app launch. Our team keeps you informed at every stage, from planning and design
                    to development, testing, and deployment. We focus on building intuitive travel applications that
                    simplify bookings, improve user engagement, and deliver a smooth experience for your customers from
                    day one. Every project follows a clear path from first idea to live app. Your team stays informed at
                    each stage and your guests get a smooth booking experience from day one.</p>
            </div>
        </div>
        <div className="row">
            <div className="wrapper">
                <div className="process-steps">

                    <ol className="process-container d-lg-flex ">
                        <li className="process-step">
                            <div className="process-circles">
                                01
                            </div>
                            <h6 className="process-heading mb-2">Discovery &amp; Strategy</h6>
                            <p className="text-muted"> We start with your business goals and your guests’ booking habits to
                                set the right direction.</p>
                        </li>
                        <li className="process-step">
                            <div className="process-circles">02</div>
                            <h6 className="process-heading mb-2"> UI/UX Design</h6>
                            <p className="text-muted"> Wireframes and interactive prototypes map out search, booking and
                                itinerary screens so you can react before development starts.</p>
                        </li>
                        <li className="process-step">
                            <div className="process-circles">03</div>
                            <h6 className="process-heading mb-2">Development</h6>
                            <p className="text-muted"> Work moves in short agile sprints with booking engines and payment
                                gateways integrated along the way.</p>
                        </li>
                        <li className="process-step">
                            <div className="process-circles">04</div>
                            <h6 className="process-heading mb-2">Testing &amp; QA</h6>
                            <p className="text-muted"> Bookings and payments are tried on real devices and on slow
                                connections where travellers often get stuck.</p>
                        </li>
                        <li className="process-step">
                            <div className="process-circles">05</div>
                            <h6 className="process-heading mb-2">Deployment</h6>
                            <p className="text-muted"> We get the app release-ready and take care of App Store and Google
                                Play submissions.</p>
                        </li>
                        <li className="process-step">
                            <div className="process-circles">06</div>
                            <h6 className="process-heading mb-2">Maintenance &amp; Scaling</h6>
                            <p className="text-muted">
                                After launch, we watch performance closely and prepare the app for busy holiday and peak
                                seasons.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};
