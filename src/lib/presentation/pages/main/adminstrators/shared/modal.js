import React from "react";
import { Link } from "react-router-dom";

function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <button
        className="px-4 py-2 text-white bg-[#438FFE] rounded-xl hover:bg-[#2563EB] hover:text-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create New Room
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
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg ">
                  <div className="my-3 items-center justify-center ">
                    <div className="mt-2  sm:ml-4 sm:text-left">
                      <h2 className="text-xl font-semibold text-gray-800">
                        Create New Room
                      </h2>
                      {/* <form> */}
                        <div className="relative z-0 mb-6 w-full group">
                          <label className="block pb-4 text-sm text-gray-500 font-semibold">
                            Room Privacy
                          </label>
                          <select
                            type="text"
                            name="role"
                            id="floating_role"
                            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-xl"
                            placeholder=" "
                            required
                          >
                            <option>0.003 ETH</option>
                            <option>0.004 ETH</option>
                            <option>0.005 ETH</option>
                            <option>0.006 ETH</option>
                            <option>0.007 ETH</option>
                          </select>
                        </div>

                        <div className="relative z-0 mb-6 w-full group">
                          <label className="block pb-4 text-sm text-gray-500 font-semibold">
                            Room Privacy
                          </label>
                          <select
                            type="text"
                            name="role"
                            id="floating_role"
                            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-xl"
                            placeholder=" "
                            required
                          >
                            <option>Public</option>
                            <option>Private</option>
                          </select>
                        </div>
                        <div className="items-center gap-2 mt-3 sm:flex">
                          <Link to="/join-game"
                            className="w-full mt-2 p-2.5 flex-1 text-center text-white bg-[#438FFE] rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                            // onClick={() => setShowModal(false)}
                          >
                            Save
                          </Link>
                          <button
                            className="w-full mt-2 p-2.5 flex-1 bg-[#ED1B24] text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2 dark:text-white"
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      {/* </form> */}
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

export default Modal;
