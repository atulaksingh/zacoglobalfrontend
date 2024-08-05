import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const {
  year,
  flag,
  flag1,
  flag2,
  flag3,
  flag4,
  logo6,
  about2,
  socials,
  links,
  links2,
  links3,
} = mainFooter;

const FooterSix = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <>
      <div className="footer-six">
        <div className="auto-container">
          <Row>
            <Col sm={12} md={12} lg={4}>
              <div className="footer-six__widget footer-six__about">
                <Link href="/" passHref>
                  <Image src={logo6.src} width={135} alt="" />
                </Link>
                <div
                  className="footer-six__about__text w-80"
                  style={{ fontSize: "14px" }}
                >
                  {about2}
                </div>
                {/* <div className="text-red-600">dhgjh</div> */}
                {/* <div className="footer-six__social">
                  {socials.map(({ id, icon, href }) => (
                    <Link key={id} href={href}>
                      <i className={icon}></i>
                    </Link>
                  ))}
                </div> */}
              </div>
            </Col>
            <Col sm={12} md={12} lg={2}>
              <div className="footer-six__widget footer-six__links">
                <h3 className="footer-six__title">Explore</h3>
                <div className="footer-six__links__list">
                  <ul className="footer-six__links__list__item">
                    {links.slice(0, 5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href} passHref>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="footer-six__links__list__item">
                    {links.slice(5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href} passHref>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={2}>
              <div className="footer-six__widget footer-six__links">
                <h3 className="footer-six__title">Brands</h3>
                <div className="footer-six__links__list">
                  <ul className="footer-six__links__list__item">
                    {links2.slice(0, 5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="footer-six__links__list__item">
                    {links.slice(5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <div className="footer-six__widget footer-six__links">
                <h3 className="footer-six__title">Hardware Services</h3>
                <div className="footer-six__links__list">
                  <ul className="footer-six__links__list__item">
                    {links3.slice(0, 5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="footer-six__links__list__item">
                    {links.slice(5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            {/* <Col sm={12} md={12} lg={3}>
              <div className="footer-six__widget footer-six__newsletter">
                <h3 className="footer-six__title">Newsletter</h3>
                <form
                  onSubmit={handleSubmit}
                  className="footer-six__newsletter__form"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                  />
                  <button type="submit">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                  <div>
                    I agree to all <Link href="/">terms and policies</Link>{" "}
                  </div>
                </form>
              </div>
            </Col> */}
          </Row>

          <div
            className="text-white  mt-4  py-3.5"
            style={{ borderBlock: "2px solid white" }}
          >
            <div className="flex flex-wrap justify-around align-middle items-center ">
              <div className="text-lg font-semibold">Countries</div>
              <Link href={"/"}>
                <Image src={flag.src} width={45} alt="" />
                <div className="my-1 text-center">INDIA</div>
              </Link>
              <Link href={"/UK"}>
                <Image src={flag1.src} width={45} alt="" />
                <div className="my-1 text-center">UK</div>
              </Link>
              <Link href={"/UAE"}>
                <Image src={flag2.src} width={45} alt="" />
                <div className="my-1 text-center">UAE</div>
              </Link>
              <Link href={"/canada"} className="text-center">
                <Image src={flag3.src} width={45} alt="" className=" m-auto"/>
                <div className="my-1 text-center">CANADA</div>
              </Link>
              {/* <div>
                <Image src={flag4.src} width={45} alt="" />
                <div className="my-1">INDIA</div>
              </div> */}
            </div>
            {/* <div className="mt-6 text-base  ">
              <span className="font-bold text-base">Locations :</span>
              <span className="ml-5 ">
                Delhi | Bangalore | Hyderabad | Chennai | Ahmedabad | Kolkata |
                Pune | Mumbai | Nagpur | Lucknow | Noida | Jaipur |
                Visakhapatnam | Coimbatore
              </span>
            </div>
            <div className="mt-4 text-base ">
              <span className="font-bold text-base">
                Server Rental Services :
              </span>
              <span className="ml-5 ">
                {" "}
                Server Rental Hyderabad | Server Rental Bangalore | Server
                Rental Chennai | Server Rental Delhi | Server Rental Mumbai |
                Server Rental Nagpur | Server Rental Kolkata | Server Rental
                Pune | Server Rental Lucknow | Server Rental Noida | Server
                Rental Jaipur | Server Rental Vizag | Server Rental Gurgaon |
                Server Rental Ahmedabad
              </span>
            </div>
            <div className="mt-4 text-base ">
              <span className="font-bold text-base">Refurbished Servers :</span>
              <span className="ml-5 ">
                {" "}
                Refurbished Server Delhi | Used Server Bangalore | Second-hand
                Server Chennai | Refurbished Server Ahmedabad | Refurbished
                Server Kolkata | Second hand Server Pune | Refurbished Server
                Mumbai | Used Server Lucknow | Refurbished Server Noida |
                Refurbished Server Jaipur | Second-hand Server Coimbatore | Used
                Server Vizag | Used Servers Hyderabad | Used Servers Gurgaon
              </span>
            </div>
            <div className="mt-4 text-base ">
              <span className="font-bold text-base">Hosting Services :</span>{" "}
              <span className="ml-5 ">
                Dedicated Server Price | Cloud VPS Servers | VPS Server India |
                Cloud Reseller Hosting | Data Center Colocation | Saas Hosting{" "}
              </span>
            </div>
            <div className="mt-4 text-base ">
              <span className="font-bold text-base">Brands :</span>
              <span className="ml-5 ">
                {" "}
                HP Servers | Dell Servers | IBM Servers | Cisco Servers | Lenovo
                Servers | Fujitsu Servers | SuperMicro Servers{" "}
              </span>
            </div>
            <div className="mt-4 text-base ">
              <span className="font-bold text-base">Price List :</span>
              <span className="ml-5 ">
                {" "}
                HP Servers Price List | IBM Server Price List | DELL Servers
                Price List | Server Price list | Xeon Processor Price List |
                DDR4 ECC RAM{" "}
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer-six__copyright ">
        <div className="auto-container flex justify-center lg:justify-between  align-middle items-center flex-wrap">
          <div>
            © Copyright 2023 Zaco Computers Pvt. Ltd. All Rights Reserved.
          </div>
          <div className="">
            <div className="footer-six__social ">
              {socials.map(({ id, icon, href }) => (
                <Link key={id} href={href} passHref>
                  <i className={icon}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSix;
