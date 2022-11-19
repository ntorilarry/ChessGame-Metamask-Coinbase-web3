import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import Table from "../adminstrators/adminTable"; //
import Datepicker from "../adminstrators/shared/datepicker";
import Mytab from "../adminstrators/shared/mytab";
import Modal from "../adminstrators/shared/modal";

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
        <div className="flex h-[90vh] justify-center bg-white items-center">
          <PuffLoader size={80} color={"#438FFE"} loading={loading} />
        </div>
      ) : (
        <div className="p-4 min-h-screen lg:mx-12 bg text-gray-900">
          <div className="flex items-center justify-end items-center ">
            <Datepicker />
            <Modal />
          </div>
          <Mytab />
          <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-white ">
            <div className=""></div>
            <div className="mt-6">
              <Table columns={columns} data={data} />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default Completed;
