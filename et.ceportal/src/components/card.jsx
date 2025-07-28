import React from "react";
import portalIcon from "../images/portal_svg.svg";
import addisBg from "../images/addis_page1_bg.png";
import adanechPic from "../images/adanech_pic.jpg";

const Card = () => {
  return (
    <main>
      {/* Hero Section */}
      <div
        className="flex flex-col justify-center items-center w-screen h-140 bg-cover bg-center"
        style={{ backgroundImage: `url(${addisBg})` }}
      >
        <div className="relative bottom-14 right-1 bg-gradient-to-b from-[#a6a6a6]/40 to-[#ffffff]/40 rounded-3xl flex justify-center items-center h-30 w-200">
          <h1 className="text-6xl text-center">Welcome to Addis Ababa City</h1>
        </div>
        <div className="flex w-screen justify-end p-8">
          <a>
            <img
              className="h-20 w-20"
              src={portalIcon}
              alt="City Portal Icon"
            />
          </a>
        </div>
      </div>

      {/* Statistics Section */}
      <ul className="h-25 w-screen flex justify-around">
        <li className="flex-1 border-r border-r-black flex flex-col items-center justify-center">
          <div>Population</div>
          <div>0</div>
        </li>
        <li className="flex-1 border-r border-r-black flex flex-col items-center justify-center">
          <div>Area</div>
          <div>0</div>
        </li>
        <li className="flex-1 border-r border-r-black flex flex-col items-center justify-center">
          <div>Number of visitors</div>
          <div>0</div>
        </li>
        <li className="flex-1 border-r border-r-black flex flex-col items-center justify-center">
          <div>State Revenue</div>
          <div>0</div>
        </li>
      </ul>

      {/* About Addis Section */}
      <div className="text-center text-7xl my-8">
        <h1>About Addis</h1>
      </div>

      <div className="w-screen h-200 flex p-8 gap-8 justify-around">
        <div className="flex-1 flex flex-col overflow-hidden">
          <img
            className="h-[60%] object-cover"
            src={adanechPic}
            alt="Dr. Adanech Abebe"
          />
          <div className="bg-[#0d4d99] h-[40%] flex flex-col p-5">
            <h1 className="text-white text-center">Dr Adanech Abebe</h1>
            <p className="text-white text-justify">
              Adanech Abebe is the current mayor of Addis Ababa, making history
              as the first woman to hold the position. She was appointed in 2020
              and has since focused on urban development and improving public
              services. Before becoming mayor, she served as Ethiopia’s Minister
              of Revenue. Adanech is known for her leadership in reforming tax
              systems and combating corruption. As mayor, she has worked on
              infrastructure projects and housing programs for low-income
              residents. Her role highlights the increasing presence of women in
              Ethiopian politics and leadership.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-amber flex flex-col justify-center">
          <h2 className="text-center font-bold text-2xl mb-4 underline relative bottom-6">
            Addis Ababa, Ethiopia
          </h2>
          <p className="flex-wrap text-lg relative bottom-6">
            Addis Ababa is the capital city of Ethiopia and one of the highest
            capitals in the world, sitting at about 2,355 meters above sea
            level. It was founded in 1886 by Emperor Menelik II and means "new
            flower" in Amharic. The city serves as the political, cultural, and
            economic center of the country. It is home to the African Union
            headquarters and numerous international organizations. Addis Ababa
            is known for its diverse population, vibrant markets, and historic
            landmarks like the National Museum and Holy Trinity Cathedral.
            Despite rapid development, the city still preserves elements of its
            rich cultural heritage.
          </p>
        </div>
      </div>

      {/* City Services */}
      <div>
        <h1 className="text-center my-8 text-3xl">
          City Services & Information
        </h1>
        <div className="flex flex-row justify-center gap-8 h-50 w-screen mx-auto">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="border border-black h-80 w-80 rounded-2xl flex flex-col p-4"
            >
              <img alt="" />
              <img alt="" />
              <p>
                Access bus schedules, route maps, ticket information, and real
                time updates for all public transportation services
              </p>
              <ul className="list-disc list-inside">
                <li>Bus schedules and routes</li>
                <li>Online ticket booking</li>
                <li>Service updates and alerts</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Card;
