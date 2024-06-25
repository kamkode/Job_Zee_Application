import React from "react";
import { FaMicrosoft, FaApple, FaAmazon, FaGoogle, FaFacebook } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Bandra Kurla Complex, Mumbai, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Lavelle Road, Bengaluru, India",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Ulsoor, Bengaluru, India",
      openPositions: 20,
      icon: <FaApple />,
    },
    {
      id: 4,
      title: "Amazon",
      location: "Outer Ring Road, Bengaluru, India",
      openPositions: 15,
      icon: <FaAmazon />,
    },
    {
      id: 5,
      title: "Google",
      location: "Cyber City, Gurugram, India",
      openPositions: 25,
      icon: <FaGoogle />,
    },
    {
      id: 6,
      title: "Facebook",
      location: "Banjara Hills, Hyderabad, India",
      openPositions: 8,
      icon: <FaFacebook />,
    },
  ];

  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;