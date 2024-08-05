"use client";
import Link from "next/link";
import React, { useState } from "react";

function EoslCard(props) {
  const data = props.data;
 
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data?.filter((item) => {
    const brandFilter =
      selectedBrand === "all" || item.brand.brand_name === selectedBrand;
    const searchFilter =
      item.brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.eosls.some((eosl) =>
        eosl.model.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return brandFilter && searchFilter;
  });

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className=" lg:mx-40 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 ">
            <div className="w-80 lg:w-72 ml-5 lg:ml-0">

            <select
              className="form-select form-select-md"
              aria-label="large select example"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="all">All</option>
              {data?.map((item) => (
                <option key={item.brand.id} value={item.brand.brand_name}>
                  {item.brand.brand_name}
                </option>
              ))}
            </select>
            </div>
          </div>
          <div className="col-span-1 mx-4 lg:mx-auto">
            <div className="search ">
              <form className="form-inline flex gap-3 my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button
                  className="btn btn-outline-warning my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <div className="text-xs mt-1">
                Or Search Our Entire EOSL Library by the Model Number Directly
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 ">
          {filteredData?.map((item, index) => (
            <div key={index} className="shadow-2xl ">
              <div className="p-4">
                <div
                  className="text-2xl font-thin  text-black leading-loose"
                  style={{ borderBottom: "2px solid #80808054" }}
                >
                  {item?.brand?.brand_name}
                </div>

                <table className="w-full  text-center py-10">
                  <thead>
                    <tr className="font-[600]  ">
                      <th>MODEL</th>
                      <th>EOSL DATE</th>
                      <th>CATEGORY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item?.eosls?.map((item, index) => (
                      <tr key={index} className="text-[14px] font-[400]">
                        <td>{item?.model}</td>
                        <td>{item?.eosl_date}</td>
                        <td>{item?.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="">
                  <Link
                    href={`/eoslDetails?brand=${item?.brand?.brand_name}`}
                    passHref
                  >
                    <button className="theme-btn btn-style-one mt-4">
                      <i className="btn-curve"></i>
                      <span className="btn-title">View More</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={`call-to-section-two ${"alternate"}`}>
          <div className="auto-container">
            <div className="inner clearfix">
              <div>
                <h2>
                  REQUEST FOR A QUOTE
              
                  <div className="text-sm mt-2  text-white">
                    {" "}
                    Interested in learning more about how ZACO
                     can help maximize your uptime after the OEM warranty?{" "}
                    <br />
                    Request a quote from our team today.
                  </div>
                </h2>
              </div>

              <div className="link-box">
                <Link href="/contact" passHref>
                  <div className={`theme-btn ${"btn-style-two"}`}>
                    <i className="btn-curve"></i>
                    <span className="btn-title">Get To Quote</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EoslCard;
