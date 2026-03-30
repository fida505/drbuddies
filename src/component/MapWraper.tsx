import Link from "next/link";
import { mapdata } from "../constant/alldata";

function MapWraper() {
    return (
        < >
            <section className="content-wrapper style-4">
                <div className="container">
                    <div className="map-wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2553921126255!2d75.7886758762965!3d11.242613688935972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659e6505b72ff%3A0x8a480b7887a04038!2sDr%20Buddies%20Health%20Hub!5e0!3m2!1sen!2sae!4v1767598784008!5m2!1sen!2sae" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8">
                            <div className="content-info bg-secondary">
                                <div className="section-head style-1 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title m-b0 text-white">Get in Touch with us</h2>
                                    <p className="text-white">Lorem Ipsum is simply dummy</p>
                                </div>
                                {mapdata.map((data, i) => (
                                    <div className="icon-bx-wraper style-1 m-b20 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                        <div className="icon-bx">
                                            <span className="icon-cell"> {data.icon} </span>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-title">{data.title}</h5>
                                            {data.para}
                                        </div>
                                    </div>
                                ))}
                                <Link href="/appointment" className="btn btn-lg btn-icon btn-primary w-100 m-t20 btn-shadow wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">
                                    <span className="w-100">Appointment</span>
                                    <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MapWraper;