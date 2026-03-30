import Link from "next/link";
import { locationdata } from "../constant/alldata";

function Alllocation() {
  return (
    <>
      <section className="content-inner bg-light bg-opacity-50">
        <div className="container">
          <div className="section-head style-3">
            <h2
              className="title m-b0 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.8s"
            >
              All Locations
            </h2>
          </div>
          <div className="row content-wrapper">
            {locationdata.map((data, i) => (
              <div
                className="col-xl-6 m-b30 wow fadeInUp"
                data-wow-delay={data.delay}
                data-wow-duration="0.8s"
                key={i}
              >
                <div className="content-bx style-6 shadow-sm">
                  <div className="dz-media">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2553921126255!2d75.7886758762965!3d11.242613688935972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659e6505b72ff%3A0x8a480b7887a04038!2sDr%20Buddies%20Health%20Hub!5e0!3m2!1sen!2sae!4v1767598784008!5m2!1sen!2sae"
                      style={{
                        border: 0,
                        width: "100%",
                        height: "100%",
                        marginBottom: "-8px",
                      }}
                      allowFullScreen
                    />
                  </div>
                  <div className="dz-info">
                    <div className="clearfix">
                      <h3 className="title m-b20">{data.title}</h3>
                      <div className="m-b15">
                        <h4 className="m-b5 font-16">Address:</h4>
                        <p>
                          Revathy Arcade, Chalappuram, Calicut-673002, Kerala,
                          India
                        </p>
                      </div>
                      <div className="m-b15">
                        <h4 className="m-b5 font-16">Service Time:</h4>
                        <p>Mon -Sat: 7:00 - 17:00</p>
                      </div>
                    </div>
                    <div className="dz-footer">
                      <Link
                        href="https://www.google.com/maps/dir//Dr+Buddies+Health+Hub+Ground+floor,+Revathy+Arcade+Commercial+Complex+Chalappuram+Kozhikode,+Kerala+673002,+India/@11.2426137,75.7912508,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3ba659e6505b72ff:0x8a480b7887a04038"
                        target="_blank"
                        className="icon-link-hover-end"
                      >
                        Get Directions{" "}
                        <i className="feather icon-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Alllocation;
