import React from "react";
import BgImage from "../images/addis_page1_bg.png"; // if you're importing it as a module

function Card() {
  return (
    <main>
      {/* Hero Section */}
      <div
        className="flex flex-col justify-center items-center w-screen h-[40rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="relative bottom-14 bg-gradient-to-b from-[#a6a6a6]/40 to-[#ffffff]/40 rounded-3xl flex justify-center items-center h-28 w-[50rem] px-4">
          <h1 className="text-4xl md:text-6xl text-center font-bold text-black">
            Welcome to Addis Ababa City
          </h1>
        </div>

        <div className="flex w-full justify-end p-8">
          <a href="#">
            <img
              src="/city_portal/images/portal_svg.svg"
              alt="Portal Icon"
              className="h-20 w-20"
            />
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <ul className="h-24 w-screen flex justify-around border-t border-b">
        {[
          { title: "Population", value: "0" },
          { title: "Area", value: "0" },
          { title: "Number of Visitors", value: "0" },
          { title: "State Revenue", value: "0" },
        ].map((item, index) => (
          <li
            key={index}
            className="flex-1 border-r last:border-r-0 border-black flex flex-col items-center justify-center"
          >
            <div className="font-semibold">{item.title}</div>
            <div>{item.value}</div>
          </li>
        ))}
      </ul>

      {/* About Section */}
      <div className="text-center text-5xl font-bold my-8">
        <h1>About Addis</h1>
      </div>

      {/* About Cards */}
      <div className="w-full flex flex-col md:flex-row gap-8 px-8 justify-around mb-10">
        {/* Left Card */}
        <div className="flex-1 flex flex-col overflow-hidden shadow-lg border rounded-2xl">
          <div className="h-[60%] bg-gray-200">
            {/* Optionally add an image */}
          </div>
          <div className="bg-[#0d4d99] h-[40%] text-white p-5">
            <h1 className="text-center font-bold text-lg mb-2">
              Dr Adanech Abebe
            </h1>
            <p className="text-justify text-sm">
              Adanech Abebe is the current mayor of Addis Ababa, making history
              as the first woman to hold the position. She was appointed in 2020
              and has since focused on urban development and improving public
              services. Before becoming mayor, she served as Ethiopia’s Minister
              of Revenue. Adanech is known for her leadership in reforming tax
              systems and combating corruption...
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 flex flex-col justify-center bg-gray-50 rounded-2xl p-6 shadow-lg">
          <h2 className="text-center font-bold text-2xl mb-4 underline">
            Addis Ababa, Ethiopia
          </h2>
          <p className="text-lg text-justify">
            Addis Ababa is the capital city of Ethiopia and one of the highest
            capitals in the world, sitting at about 2,355 meters above sea
            level. It was founded in 1886 by Emperor Menelik II and means "new
            flower" in Amharic. The city serves as the political, cultural, and
            economic center of the country...
          </p>
        </div>
      </div>

      {/* City Services Section */}
      <div>
        <h1 className="text-center my-8 text-3xl font-bold">
          City Services & Information
        </h1>
        <div className="flex flex-wrap justify-center gap-8 w-full px-4">
          {[1, 2, 3].map((card, idx) => (
            <div
              key={idx}
              className="border border-black h-80 w-80 rounded-2xl p-4 flex flex-col justify-between bg-white shadow-md"
            >
              <img src="" alt="Service Icon" className="h-20 mb-2" />
              <p className="text-sm">
                Access bus schedules, route maps, ticket information, and real
                time updates for all public transportation services.
              </p>
              <ul className="list-disc pl-4 text-sm mt-2">
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
}

export default Card;
