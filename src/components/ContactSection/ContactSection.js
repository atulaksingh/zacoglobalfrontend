import { contactSection } from "@/data/contactSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import zacologo from "@/images/zaco/mumbai-2.jpg";
import UKoffice from "@/images/zaco/UK-office.jpg";
import UAEoffice from "@/images/zaco/UAE-office.jpg";
import canada from "@/images/zaco/canada-2.jpg";
const MapBox = dynamic(() => import("../MapSection/MapBox"));
const FormBox = dynamic(() => import("./FormBox"));

const { title, contacts, inputs } = contactSection;

const ContactSection = ({ className = "", map = false, form = false }) => {
  const ref = useActive("#contact");

  return (
    <div ref={ref} className={`contact-section ${className}`} id="contact">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>{title}</h2>
        </div>

        <div className="upper-info">
          <Row className="clearfix">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="">
                <div className="p-3 contactUs-45 cursor-pointer">
                  <div className="text-5xl text-center ">INDIA</div>
                </div>

                <div className="relative w-full h-96 mt-4">
                  <Image
                    src={zacologo}
                    alt="Image with Address"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full rounded-md"
                  />
                  <div className="absolute w-full h-full rounded-md bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 flex align-bottom items-center justify-center">
                    <div className="border-solid border-2 border-white py-2 ">
                      <div className="text-[1.4rem] px-2 text-center ">
                        Zaco Computers Pvt Ltd(H.O)
                      </div>
                      <div className="p-3 text-center">
                        <div className="text-lg">
                          3, DLH Park, S. V. Road, Goregaon (West), Mumbai –
                          400062. Maharashtra, India.
                        </div>
                        <div className="text-lg mb-2">
                          <div> Office Timings:</div> Monday to Saturday 10:00
                          am to 7:00 pm IST
                        </div>

                        <Link href={`mailto:info@zacocomputer.com`}>
                          <div className="bg-[#446084] text-white rounded-full w-fit px-4 text-base cursor-pointer mb-3 mx-auto">
                            info@zacocomputer.com
                          </div>
                        </Link>

                        <Link href={"tel:+91-22-69288800"} passHref>
                          <div className="bg-[#446084] text-white rounded-full w-fit px-4 text-base cursor-pointer p-1 mx-auto">
                            +91-22-69288800
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
              <div className="">
                <div className="p-3 contactUs-45 cursor-pointer">
                  <div className="text-5xl text-center ">U.K</div>
                </div>
                <div className="relative w-full h-96 mt-4">
                  <Image
                    src={UKoffice}
                    alt="Image with Address"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full rounded-md"
                  />
                  <div className="absolute w-full h-full rounded-md bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 flex align-bottom items-center justify-center">
                    <div className="border-solid border-2 border-white py-2">
                      <div className="text-[1.4rem] px-2 text-center ">
                        Zaco Computers UK Limited
                      </div>
                      <div className="p-3 text-center">
                        <div className="text-lg">
                          124 City Road, London, England, EC1V 2NX.
                        </div>
                        <div className="text-lg">
                          <div> Office Timings:</div> Monday to Saturday 10:00
                          am to 7:00 pm IST
                        </div>

                        <Link href={`mailto:info@zacocomputer.com`}>
                          <div className="bg-[#446084] text-white rounded-full w-fit px-4 text-base cursor-pointer mb-3 mx-auto">
                            info@zacocomputer.com
                          </div>
                        </Link>

                        <Link href={"tel:+44-7785246591"} passHref>
                          <div className="bg-[#446084] text-white rounded-full w-fit px-4 text-base cursor-pointer p-1 mb-2 mx-auto">
                            +44-7785246591
                          </div>
                        </Link>
                        <Link href={"tel:+442038158028"} passHref>
                          <div className="bg-[#446084] text-white rounded-full w-fit px-4 text-base cursor-pointer p-1 mb-2 mx-auto">
                            +44 203 815 8028
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="">
                <div className="p-3 contactUs-45 cursor-pointer">
                  <div className="text-5xl text-center ">U.A.E</div>
                </div>
                <div className="relative w-full h-96 mt-4">
                  <Image
                    src={UAEoffice}
                    alt="Image with Address"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full rounded-md"
                  />
                  <div className="absolute w-full h-full rounded-md bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 flex align-bottom items-center justify-center">
                    <div className="border-solid border-2 border-white py-4">
                      <div className="text-[1.4rem] px-2 text-center ">
                        Zaco IT Solutions FZE
                      </div>
                      <div className="p-3 text-center">
                        <div className="text-lg">
                          B.C 1303474, First Floor, AFZ-B1, Ajman, UAE.
                        </div>
                        <div className="text-lg mb-2">
                          <div> Office Timings:</div> Monday to Saturday 9:00 am
                          to 8:00 pm GMT IST
                        </div>

                        <Link href={`mailto:info@zacocomputer.com`}>
                          <div className="bg-[#446084] text-white rounded-full w-fit px-4 text-base cursor-pointer mb-3 mx-auto">
                            info@zacocomputer.com
                          </div>
                        </Link>

                        <Link href={"tel:+971566254023"} passHref>
                          <div className="bg-[#446084] text-white rounded-full w-fit px-4 text-base cursor-pointer p-1 mx-auto">
                            +971 56 625 4023
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="">
                <div className="p-3 contactUs-45 cursor-pointer">
                  <div className="text-5xl text-center ">CANADA</div>
                </div>
                <div className="relative w-full h-96 mt-4">
                  <Image
                    src={canada}
                    alt="Image with Address"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full rounded-md"
                  />
                  <div className="absolute w-full h-full rounded-md bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 flex align-bottom items-center justify-center">
                    <div className="border-solid border-2 border-white py-4">
                      <div className="text-[1.4rem] px-2 text-center ">
                        Zaco IT Solutions FZE
                      </div>
                      <div className="p-3 text-center">
                        <div className="text-lg">
                          135 Lower Sherbourne Street, M5A 1Y4, Toronto, ON.
                        </div>
                        <div className="text-lg mb-2">
                          <div> Office Timings:</div> Monday to Saturday 9:00 am
                          to 8:00 pm GMT IST
                        </div>
                        <Link href={`mailto:info@zacocomputer.com`}>
                          <div className="bg-[#446084] text-white rounded-full w-fit px-4 text-base cursor-pointer mb-3 mx-auto">
                            info@zacocomputer.com
                          </div>
                        </Link>

                        <Link href={"tel:+15874353187"} passHref>
                          <div className="bg-[#446084] text-white rounded-full w-fit px-4 text-base cursor-pointer p-1 mx-auto">
                            +1 587 435 3187
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </Row>
        </div>
        {map && <MapBox />}
        {form && <FormBox inputs={inputs} />}
      </div>
    </div>
  );
};

export default ContactSection;
