import React from "react";

function Card() {
  return (
    <>
      <main>
        <div class="flex flex-col justify-center items-center w-screen h-140 bg-cover bg-center bg-[url('../images/addis_page1_bg.png')]">
          <div class="relative bottom-14 right-1  bg-linear-180 from-[#a6a6a6]/40 to-[#ffffff]/40 rounded-3xl flex justify-center items-center  h-30 w-200">
            <h1 class="text-6xl text-center ">Welcome to Addis Ababa City</h1>
          </div>
          <div class="flex w-screen justify-end p-8">
            <a>
              <div
                class="h-20 w-20 "
                src="{%static 'city_portal/images/portal_svg.svg'%}"
              ></div>
            </a>
          </div>
        </div>
        <ul class="h-25 w-screen flex justify-around">
          <li class="flex-1 border-r border-r-black flex flex-col items-center justify-center">
            <div>Population</div>
            <div>0</div>
          </li>
          <li class="flex-1 border-r border-r-black flex flex-col items-center justify-center">
            <div>Area</div>
            <div></div>0
          </li>
          <li class="flex-1 border-r border-r-black flex flex-col items-center justify-center">
            <div>Number of visitors</div>
            <div>0</div>
          </li>
          <li class="flex-1 border-r border-r-black flex flex-col items-center justify-center">
            <div>State Revenue</div>
            <div>0</div>
          </li>
        </ul>
        <div class="text-center text-7xl my-8">
          <h1>About Addis</h1>
        </div>

        <div class="w-screen h-200 flex p-8 gap-8 justify-around">
          <div class="flex-1 flex flex-col overflow-hidden">
            <div class="h-[60%]  object-cover"></div>
            <div class="bg-[#0d4d99] h-[40%]  flex flex-col p-5">
              <h1 class="text-white text-center">Dr Adanech Abebe</h1>
              <p class="text-white text-justify">
                Adanech Abebe is the current mayor of Addis Ababa, making
                history as the first woman to hold the position. She was
                appointed in 2020 and has since focused on urban development and
                improving public services. Before becoming mayor, she served as
                Ethiopia’s Minister of Revenue. Adanech is known for her
                leadership in reforming tax systems and combating corruption. As
                mayor, she has worked on infrastructure projects and housing
                programs for low-income residents. Her role highlights the
                increasing presence of women in Ethiopian politics and
                leadership.
              </p>
            </div>
          </div>
          <div class="flex-1 bg-amber flex flex-col justify-center">
            <h2 class="text-center font-bold text-2xl mb-4 underline relative bottom-6">
              Addis Ababa, Ethiopia
            </h2>
            <p class="flex-wrap text-lg relative bottom-6">
              Addis Ababa is the capital city of Ethiopia and one of the highest
              capitals in the world, sitting at about 2,355 meters above sea
              level. It was founded in 1886 by Emperor Menelik II and means "new
              flower" in Amharic. The city serves as the political, cultural,
              and economic center of the country. It is home to the African
              Union headquarters and numerous international organizations. Addis
              Ababa is known for its diverse population, vibrant markets, and
              historic landmarks like the National Museum and Holy Trinity
              Cathedral. Despite rapid development, the city still preserves
              elements of its rich cultural heritage.
            </p>
          </div>
        </div>
        <div class="">
          <h1 class="text-center my-8 text-3xl">
            City Services & Information{" "}
          </h1>
          <div class="flex flex-row justify-center gap-8 h-50 w-screen mx-auto">
            <div class=" border border-black h-80 w-80 rounded-2xl flex">
              <img></img>
              <p>
                Access bus schedules, route maps, ticket information, and real
                time updates for all public transportation services
              </p>
              <ul>
                <li> Bus schedules and routes</li>
                <li>online ticket booking</li>
                <li>service updates and alerts</li>
              </ul>
            </div>
            <div class=" border border-black h-80 w-80 rounded-2xl flex">
              <div></div>
              <p>
                Access bus schedules, route maps, ticket information, and real
                time updates for all public transportation services
              </p>
              <ul>
                <li> Bus schedules and routes</li>
                <li>online ticket booking</li>
                <li>service updates and alerts</li>
              </ul>
            </div>
            <div class=" border border-black h-80 w-80 rounded-2xl flex">
              <p>
                Access bus schedules, route maps, ticket information, and real
                time updates for all public transportation services
              </p>
              <ul>
                <li> Bus schedules and routes</li>
                <li>online ticket booking</li>
                <li>service updates and alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Card;
