import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Connect from "@/component/Connect";
import Getintouch from "@/component/Getintouch";
import Alllocation from "@/component/Alllocation";
import Image from "next/image";

function Contactus() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Contact Us" bnrimage={IMAGES.bnr1.src} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row g-xl-4 align-items-center">
                            <Connect />
                            <Getintouch />
                        </div>
                    </div>
                </section>
                <Alllocation />
                <div className="clearfix">
                    <div className="map-wrapper style-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2553921126255!2d75.7886758762965!3d11.242613688935972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659e6505b72ff%3A0x8a480b7887a04038!2sDr%20Buddies%20Health%20Hub!5e0!3m2!1sen!2sae!4v1767598784008!5m2!1sen!2sae" 
                            style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        >                            
                        </iframe>
                        <div className="container">
                            <div className="content-bx style-5 position-absolute wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                                <div className="content-logo">
                                    <Image src={IMAGES.logo} alt="logo" />
                                </div>
                                <div className="content-text">
                                    <p className="m-b0">Revathy Arcade, Chalappuram, Calicut-673002, Kerala, India</p>
                                </div>
                                <div className="dz-footer">
                                    <Link href="https://www.google.com/maps/dir//Dr+Buddies+Health+Hub+Ground+floor,+Revathy+Arcade+Commercial+Complex+Chalappuram+Kozhikode,+Kerala+673002,+India/@11.2426137,75.7912508,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3ba659e6505b72ff:0x8a480b7887a04038" target="_blank" className="icon-link-hover-end">Open Google Map <i className="feather icon-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />            
        </>
    );
}
export default Contactus;