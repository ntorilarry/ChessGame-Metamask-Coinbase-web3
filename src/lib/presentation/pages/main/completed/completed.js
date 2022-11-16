import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from "../adminstrators/adminTable"; //
import Datepicker from "../adminstrators/shared/datepicker";
import Mytab from "../adminstrators/shared/mytab";

const getData = () => {
  const data = [
    {
      gamed: "28",
      limit: "2",
      winner: "0x449...103429",
      won: "0.003 ETH",
      date: "04/04/2022",
    },

    {
      gamed: "28",
      limit: "2",
      winner: "0x449...103431",
      won: "0.04 ETH",
      date: "31/03/2022",
    },

    {
      gamed: "28",
      limit: "2",
      winner: "0x449...103432",
      won: "0.05 ETH",
      date: "30/03/2022",
    },
    {
      gamed: "28",
      limit: "2",
      winner: "0x449...103432",
      won: "0.06 ETH",
      date: "07/03/2022",
    },
    {
      gamed: "28",
      limit: "2",
      winner: "0x449...103433",
      won: "0.07 ETH",
      date: "25/02/2022",
    },
  ];
  return [...data];
};
function Completed() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Gamed",
        accessor: "gamed",
      },
      {
        Header: "Limit",
        accessor: "limit",
      },
      {
        Header: "Winner",
        accessor: "winner",
      },
      {
        Header: "Amount Won",
        accessor: "won",
      },
      {
        Header: "Date Ended",
        accessor: "date",
      },
      {
        Header: "Action",
        id: "delete",
        accessor: (str) => "delete",

        Cell: (tableProps) => (
          <div>
            <button className="bg-[#BFBFBF] mx-2 w-32 text-white py-2 px-2 text-sm rounded-lg hover:bg-[#2563EB]">
              Request to Join
            </button>
            <button className="bg-none border-2 border-[#438FFE] mx-2 w-32 text-[#438FFE] py-2 px-2 text-sm rounded-lg hover:border-[#2563EB] text-[#2563EB]">
              Spectate
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  const [showModal, setShowModal] = React.useState(false);

  const [firstname, setFirstname] = useState("");
  const [othername, setOthername] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("6319cb015d9544f3cdbc9695");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstname, othername, email, username, role);
    setFirstname("");
    setOthername("");
    setEmail("");
    setUsername("");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_SSO}/create`,
      data: JSON.stringify({
        first_name: firstname,
        other_names: othername,
        email: email,
        username: username,
        group_id: role,
        password_redirect_url: "https://advocacy.nsano.com/reset-password",
        verify_email_url: "https://advocacy.nsano.com/verify-email",
      }),
      headers: {
        "Content-Type": "application/json",
        "X-App-Token": "28f4bf7f-97ee-4664-9be0-6ffd81fb76be",
      },
    })
      .then((response) => {
        if (response.data.code === "00") {
          toast.success("Admin Added Successfully");
        } else {
          toast.error("Admin Denied");
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        toast.error("Login Failed");
      });
    setShowModal(false);
  };

  return (
    <div className="p-4 min-h-screen lg:mx-12 bg text-gray-900">
      <div className="flex items-center justify-end items-center ">
        <Datepicker />
        <button
          className="px-4 py-2 text-white bg-[#438FFE] rounded-xl hover:bg-[#2563EB] hover:text-white"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Create New Room
        </button>
      </div>
      <Mytab />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-white ">
        <div className="">
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
                          <form onSubmit={handleSubmit}>
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
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
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
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                              >
                                <option>Public</option>
                                <option>Private</option>
                              </select>
                            </div>
                            <div className="items-center gap-2 mt-3 sm:flex">
                              <button
                                className="w-full mt-2 p-2.5 flex-1 text-white bg-[#438FFE] rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                // onClick={() => setShowModal(false)}
                              >
                                Save
                              </button>
                              <button
                                className="w-full mt-2 p-2.5 flex-1 bg-[#ED1B24] text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2 dark:text-white"
                                onClick={() => setShowModal(false)}
                              >
                                Cancel
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
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default Completed;
