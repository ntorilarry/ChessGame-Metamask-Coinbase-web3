import React, { useState, useEffect } from "react";
import Gamenav from "./gamenav";
import PuffLoader from "react-spinners/PuffLoader";
import Timer from "./timer";
import Chess from "../../../../core/resources/images/phpssvLon.gif";
import Gamemodal from "./gamemodal";

function Joingame() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <div>
    {loading ? (
      <div className="flex h-[100vh] justify-center bg-[#292927] items-center"><PuffLoader size={80} color={"white"} loading={loading}  /></div>
    ) : (
    <div className="bg-[#292927]">
      <Gamenav />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <p className="text-white">
          <Gamemodal />
        </p>
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <header class="text-gray-600 w-full ">
              <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
                <div class="flex title-font font-medium items-center  mb-4 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#BDBDBD"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                    className="bg-[#383531]"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <span class="ml-3 text-xl text-[#BDBDBD]">Opponent</span>
                </div>

                <button class="inline-flex text-[#BDBDBD] items-center bg-[#383531] border-0 py-2 px-3 rounded text-base ">
                  <Timer />
                </button>
              </div>
            </header>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <img
              className="object-cover w-full h-full rounded shadow-lg"
              src={Chess}
              alt=""
            />
          </div>
          <div className="max-w-xl my-10 md:mx-auto sm:text-center lg:max-w-2xl md:my-12">
            <header class="text-gray-600 w-full ">
              <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
                <div class="flex title-font font-medium items-center  mb-4 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#BDBDBD"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                    className="bg-[#383531]"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <span class="ml-3 text-xl text-[#BDBDBD]">My Avatar</span>
                </div>

                <button class="inline-flex text-[#BDBDBD] items-center bg-[#383531] border-0 py-2 px-3 rounded text-base ">
                  <Timer />
                </button>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
    )}
    </div>
  );
}

export default Joingame;
