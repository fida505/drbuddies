"use client"
import Link from "next/link";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import PageBanner from "@/component/PageBanner";
import { servicedetails } from "@/constant/alldata";
import { servicesData } from "@/constant/servicesData";
import Image from "next/image";
import { Accordion } from "react-bootstrap";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function ServiceDetailContent() {
    const searchParams = useSearchParams();
    const serviceParam = searchParams.get("service") || "Diabetology";
    
    // Find matching service data
    const serviceName = Object.keys(servicesData).find(
        (key) => key.toLowerCase() === serviceParam.toLowerCase()
    ) || "Diabetology";
    
    const service = servicesData[serviceName];
    const [activeFaq, setActiveFaq] = useState("0");

    return (
        <main className="page-content">
            <PageBanner title={service.title} bnrimage={IMAGES.bnr2.src} />
            <section className="content-inner service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 single-inner order-lg-1">
                            <div className="content-item wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                <h2>{service.title}</h2>
                                <h4 className="text-primary m-b20">{service.subtitle}</h4>
                                <p>{service.intro}</p>
                            </div>
                            
                            {service.services && service.services.length > 0 && (
                                <div className="content-item wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.7s">
                                    <h3>Services and Treatment</h3>
                                    <ul className="list-check text-secondary grid-2 m-b30">
                                        {service.services.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.diagnostics && service.diagnostics.length > 0 && (
                                <div className="content-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                                    <h3>Advanced Diagnostic Facilities</h3>
                                    <ul className="list-check text-secondary grid-2 m-b30">
                                        {service.diagnostics.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="content-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                                <h3>Available Doctors / Specialists</h3>
                                <div className="row">
                                    <div className="col-xxl-6 col-sm-12">
                                        <div className="dz-team style-1 active">
                                            <div className="dz-content" style={{ padding: '20px' }}>
                                                <h4 className="dz-name" style={{ margin: 0, color: 'var(--bs-heading-color)' }}>
                                                    {service.doctor}
                                                </h4>
                                                <span className="dz-position" style={{ color: 'var(--bs-primary)' }}>Specialist</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {service.faqs && service.faqs.length > 0 && (
                                <div className="content-item wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
                                    <h3>Frequently Asked Questions</h3>
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {service.faqs.map((faq, i) => (
                                            <Accordion.Item eventKey={String(i)} key={i} className="wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.7s">
                                                <Accordion.Header>{faq.question}</Accordion.Header>
                                                <Accordion.Body>
                                                    {faq.answer}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-4 m-b30">
                            <aside className="side-bar sticky-top left">
                                <div className="widget service_menu_nav bg-secondary wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                    <div className="widget-title">
                                        <h4 className="title">All Services</h4>
                                    </div>
                                    <ul>
                                        {servicedetails.map((item, i) => {
                                            const isActive = item.title.toLowerCase() === service.title.toLowerCase();
                                            return (
                                                <li key={i} className={isActive ? "active" : ""}>
                                                    <Link href={`/service-detail?service=${encodeURIComponent(item.title)}`}>
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="widget_contact wow fadeInUp" 
                                    style={{ backgroundImage: `url(${IMAGES.bg3png.src})` }} data-wow-delay="0.4s" data-wow-duration="0.7s"
                                >
                                    <div className="widget-content">
                                        <Image src={IMAGES.question} width="80" alt="" />
                                        <h4 className="title">Do you need any help?</h4>
                                        <div className="phone-number">
                                            <Link href="tel:+919747306060">+91 97473 06060</Link>
                                        </div>
                                        <div className="email">
                                            <Link href="mailto:admin@drbuddies.com">admin@drbuddies.com</Link>
                                        </div>
                                        <div className="link-btn">
                                            <Link href="/contact-us" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                                                Contact Us <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ServiceDetail() {
    return (
        <>
            <Header />
            <Suspense fallback={
                <div className="container text-center p-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }>
                <ServiceDetailContent />
            </Suspense>
            <Footer />
        </>
    );
}

export default ServiceDetail;