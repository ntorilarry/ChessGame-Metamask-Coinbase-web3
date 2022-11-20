import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function Gamemodal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <button
        className="flex items-center mx-auto my-4 sm:mx-0 text-white justify-center sm:justify-start"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <BiArrowBack />
        Go Back
      </button>
      <>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8 ">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-[#292927] rounded-md shadow-lg ">
                  <div className="my-3 items-center justify-center ">
                    <div className="mt-2  sm:ml-4 sm:text-left">
                      <h2 className="text-xl text-center font-semibold text-white">
                        Are you sure you want to quit game ?
                      </h2>
                      <form>
                        <div className="items-center gap-2 mt-3 sm:flex">
                          <Link
                            to="/administrator"
                            className="w-full block my-2 p-2.5 flex-1 text-center text-white bg-[#438FFE] rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                            // onClick={() => setShowModal(false)}
                          >
                            Yes
                          </Link>
                          <button
                            className="w-full block my-2 p-2.5 flex-1 bg-[#ED1B24] text-white rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={() => setShowModal(false)}
                          >
                            No
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    </div>
  );
}

export default Gamemodal;
