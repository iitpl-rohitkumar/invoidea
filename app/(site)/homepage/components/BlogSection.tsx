"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogItem {
  id: number;
  title: string;
  image: string;
  url: string;
}

const blogs: BlogItem[] = [
  {
    id: 1,
    title: "Benefits of AI Integration: Why Businesses Are Adopting AI Fast",
    image: "/assets/blog-1.webp",
    url: "/blog/benefits-of-ai-integration",
  },
  {
    id: 2,
    title: "Top AI Trends Shaping the Future for 2026",
    image: "/assets/blog-2.webp",
    url: "/blog/top-ai-trends",
  },
  {
    id: 3,
    title: "Virtualization in Cloud Computing: Definition, Types, and Benefits",
    image: "/assets/blog-3.webp",
    url: "/blog/virtualization-in-cloud-computing",
  },
];

const integrations = [
  {
    title: "CMS Integration",
    image: "/assets/CMS-integration-img.webp",
    desc: "We design websites with CMS integration, allowing businesses to handle operations and manage content efficiently.",
    col: "col-lg-3 col-md-6 mb-4",
  },
  {
    title: "CRM Integration",
    image: "/assets/CRM-integration-img.webp",
    desc: "Our professionals create designs with CRM systems that help monitor customer interaction and improve customer relationships.",
    col: "col-lg-3 col-md-6 mb-4",
  },
  {
    title: "Payment Gateway Integration",
    image: "/assets/payment-gateway-integration-img.webp",
    desc: "We offer secure online payments through multiple payment gateway integrations that make all your transactions simple and convenient for your customers.",
    col: "col-lg-3 col-md-6 mb-4",
  },
  {
    title: "Social Media Integration",
    image: "/assets/smi-img.webp",
    desc: "Integrating your website with popular social media platforms for sharing content and increase visibility as well as encourage more visitors to your website.",
    col: "col-lg-3 col-md-6 mb-4",
  },
  {
    title: "AI-Powered Email Marketing Integration",
    image: "/assets/emi-img.webp",
    desc: "We integrate AI-assisted email campaigns within your website to manage as well as monitor performance and keep your audience engaged with relevant communication.",
    col: "col-lg-4 col-md-6 mb-4",
  },
  {
    title: "AI-Powered Search Engine Optimization Tools",
    image: "/assets/seot-img.webp",
    desc: "We use AI-assisted SEO tools to website's search visibility as well as monitor content and search performance to attract more organic traffic.",
    col: "col-lg-4 col-md-6 mb-4",
  },
  {
    title: "AI-Powered Analytics and Tracking Integration",
    image: "/assets/analytics-tracking-int-img.webp",
    desc: "We monitor website performance and visitor behaviour with AI-assisted analytics to make it easier to identify opportunities for improvement.",
    col: "col-lg-4 col-md-6 mb-4",
  },
];

export default function BlogSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="ptb" style={{ padding: "90px 0" }}>
      <div className="mt-3 blog-wrapper">
        {/* Blog Section Header */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center mb-5">
              <h2 className="subheading-text">AI, Software &amp; Tech Insights</h2>
              <h3 className="heading-2 mb-3">Insights, Trends &amp; Digital Strategies</h3>
              <p className="dark-text">
                Explore expert insights on AI, software, web technologies, mobile apps, and tech strategy — written to
                help businesses innovate, grow, and lead in a rapidly evolving digital-first world.
              </p>
            </div>
          </div>

          {/* 3 Blog Cards */}
          <div className="row g-4 mb-5">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6" key={blog.id}>
                <div className="blog-card border-0">
                  <Link href={blog.url} className="text-decoration-none">
                    <div className="img-zoom">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={426}
                        height={300}
                        className="card-img-top"
                        style={{
                          width: "100%",
                          height: "auto",
                          aspectRatio: "426 / 300",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="blog-card-body">
                      <h5 className="blog-card-title">{blog.title}</h5>
                      <span className="btn read-more-btn">
                        Read More <i className="fas fa-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO / Content Section */}
          <div className="row ptb pb-0 extra-wrapper-section mt-4">
            <div className="col-lg-9 mx-auto text-center">
              <h3 className="heading-2 mb-3">
                Your AI-Driven Web Design Company in India for Stunning Website &amp; Apps
              </h3>
              <p className="dark-text">
                As a leading web design company in India, we design and develop custom websites and web application to
                custom SaaS software and mobile apps that combine creative design with practical functionality. Every web
                app solution is built to simplify business processes, improve customer experiences and support the way
                your business operates. By choosing web and app technologies that fit your requirements, we create
                reliable solutions that continue to perform as your business grows.
              </p>
            </div>

            <div className="col-lg-12 text-center mt-3">
              <p className="dark-text" style={{ maxWidth: "980px", margin: "0 auto" }}>
                As a recognized web designing company in India, we create websites and mobile apps with intuitive
                interfaces and stunning AI features from scratch. With our innovative solutions and client-centric
                approach, we are committed to delivering projects as per our client&apos;s expectations which makes us the
                go-to option for your AI-integrated web design and app needs.
              </p>

              {/* Expandable Extra Content */}
              <div
                className={`extra-wrapper text-muted ${isExpanded ? "show" : ""}`}
                style={{
                  maxHeight: isExpanded ? "4000px" : "0",
                  opacity: isExpanded ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.6s ease, opacity 0.5s ease",
                  marginTop: isExpanded ? "24px" : "0",
                }}
              >
                <div className="pt-3">
                  <h3 className="heading-2 text-dark" style={{ fontSize: "28px" }}>
                    Build Your Custom AI-Powered Website with India’s Top App &amp; Web Development Experts
                  </h3>
                  <p className="dark-text text-start" style={{ maxWidth: "1280px", margin: "0 auto 16px auto" }}>
                    Every business tries to attract the audience with a lasting impression, as it encourages them to buy
                    services only from them. If you want to start your online business, it will be more difficult for you to
                    stand out. Because many businesses with already strong brand presence are competing to beat each other
                    and stay ahead.
                  </p>
                  <p className="dark-text text-start" style={{ maxWidth: "1280px", margin: "0 auto 24px auto" }}>
                    As a top AI-powered web development company in India, we build websites from the ground up that help you
                    create a robust impact in the market. We understand you have an idea for your business that you want to
                    turn into life. But you don’t know how to start. At our AI-powered website designing and mobile app
                    development company in India, we have professionals who can easily create the website and apps that you
                    want. Our experts design your website to perfectly match your vision. We ensure your website meets your
                    expectations, making you feel proud that you chose the best web designing company in India.
                  </p>
                </div>

                <div className="pt-3">
                  <h3 className="heading-2 text-dark" style={{ fontSize: "28px" }}>
                    Your All-in-One AI-Powered Web Design Solutions Provider in India
                  </h3>
                  <p className="dark-text text-start" style={{ maxWidth: "1280px", margin: "0 auto 24px auto" }}>
                    With the digital revolution, many businesses are shifting online as numerous consumers now prefer to
                    buy services and products online. In today’s fast growing world, businesses with fast-performing,
                    intuitive interfaces, and visually appealing websites attract more customers. If you want to lead your
                    business forward and remain competitive, then your website must look stunning and engaging. Being a
                    prominent AI-powered web design and app development company in India, we offer all-in-one web design and
                    development solutions to optimize your website and apps. If your website or app is struggling with user
                    experience (UI/UX), slow loading speeds or mobile responsiveness, our expert team can help resolve
                    these challenges with practical solutions — all in one place.
                  </p>
                </div>

                {/* 7 Feature Integration Cards */}
                <div className="features-section pt-3">
                  <h3 className="heading-2 text-dark" style={{ fontSize: "28px" }}>
                    Integrating Future-Ready AI-Powered Features and Functionalities to Boost Website &amp; App Performance
                  </h3>
                  <p className="dark-text" style={{ maxWidth: "1280px", margin: "0 auto 30px auto" }}>
                    At our web designing company in India, we integrate AI-powered future-ready features and
                    functionalities into your website and apps that boost performance, improve user experiences, and
                    contribute to business growth. Here are some advanced features we can smoothly integrate with your
                    website that help you stay ahead of competitors.
                  </p>

                  <div className="row text-start">
                    {integrations.map((item, idx) => (
                      <div className={item.col} key={idx}>
                        <div
                          className="p-4 shadow-sm rounded-4 h-100 bg-white text-center"
                          style={{ border: "1px solid #f1f3f7", transition: "transform 0.3s ease" }}
                        >
                          <div style={{ height: "70px", marginBottom: "16px" }}>
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={70}
                              height={70}
                              style={{ height: "70px", width: "auto", objectFit: "contain", margin: "auto" }}
                            />
                          </div>
                          <h5 className="text-black fw-bold mb-2" style={{ fontSize: "20px" }}>
                            {item.title}
                          </h5>
                          <p className="mb-0 text-muted" style={{ fontSize: "16px", lineHeight: 1.55 }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing Section */}
                <div className="mt-4 pt-3 text-center" style={{ maxWidth: "1280px", margin: "0 auto" }}>
                  <h3 className="heading-2 text-dark text-center" style={{ fontSize: "28px" }}>
                    Experienced App &amp; Web Designers in India, You Can Trust for Reliable Results
                  </h3>
                  <p className="dark-text mb-3">
                    We are a trusted AI-powered web designing company in India that has a dedicated team of expert
                    designers and app developers. Our experts have worked in several industries, and can easily understand
                    your business&apos;s challenges and create personalized industry-specific web solutions that reflect
                    your vision and aim.
                  </p>
                  <p className="dark-text">
                    They do in-depth research on your industry, including market challenges, your targeted audience, web
                    design trends, and other key aspects to ensure alignment. With timely delivery, our website designers
                    keep our commitment strong and reliable, making us your ideal choice for app and web development.
                  </p>
                </div>
              </div>

              {/* Read More / Read Less Button */}
              <div className="text-center mx-auto mt-4">
                <button
                  type="button"
                  className="btn btn-outline-theme"
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{
                    height: "50px",
                    padding: "0 22px",
                    fontSize: "15px",
                    fontWeight: 600,
                    borderRadius: "25px !important",
                    border: "1.5px solid var(--btn-outline-theme)",
                    color: "var(--theme-color-1)",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-wrapper {
          position: relative;
        }
        .blog-wrapper:after {
          background: url("/service08/assets/inv-images/background/banner/blog-bg.webp") center bottom / cover;
          content: "";
          position: absolute;
          top: 350px;
          left: 0;
          right: 0;
          width: 100%;
          height: 85%;
          z-index: -1;
        }
        .blog-card {
          height: 100%;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #e8edf7;
          box-shadow: 0 18px 45px rgba(7, 27, 69, 0.07);
          transition: 0.4s ease;
        }
        .blog-card:hover {
          transform: translateY(-8px);
          border-color: rgba(247, 155, 32, 0.35);
          box-shadow: 0 25px 65px rgba(0, 87, 255, 0.12);
        }
        .blog-card .img-zoom {
          overflow: hidden;
        }
        .blog-card .img-zoom :global(img) {
          transition: transform 0.5s ease;
        }
        .blog-card:hover .img-zoom :global(img) {
          transform: scale(1.08);
        }
        .blog-card-body {
          padding: 26px 24px;
        }
        .blog-card-title {
          color: #000;
          font-size: 1.25rem;
          line-height: 1.45;
          font-weight: 700;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 16px;
        }
          .btn-outline-theme:hover{
           color:#fff !important; 
          }
        .read-more-btn {
          color: var(--theme-color-1);
          font-size: 15px;
          font-weight: 500;
          padding: 0;
          display: inline-flex;
          align-items: center;
          transition: transform 0.3s ease;
        }
        .read-more-btn :global(i) {
          transform: rotate(-40deg);
          font-size: 13px;
          transition: transform 0.3s ease;
        }
        .blog-card:hover .read-more-btn {
          border-bottom: 1px solid var(--theme-color-1);
        }
        .blog-card:hover .read-more-btn :global(i) {
          transform: rotate(0deg);
        }
      `}</style>
    </section>
  );
}
