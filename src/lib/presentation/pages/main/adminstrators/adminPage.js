import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Table from "./adminTable"; //
import Datepicker from "./shared/datepicker";
import Mytab from "./shared/mytab";
import Modal from "./shared/modal";

const getData = () => {
  const data = [
    {
      gamed: "28",
      limit: "2",
      fee: "0.5 ETH",
      players: "0",
      date: "04/04/2022",
      role: "Admin",
      age: 27,
    },
  ];
  return [...data, ...data, ...data, ...data, ...data];
};
function AdminPage() {
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
        Header: "Entry Fee",
        accessor: "fee",
      },
      {
        Header: "No. of Players",
        accessor: "players",
      },
      {
        Header: "Date Created",
        accessor: "date",
      },
      {
        Header: "Action",
        id: "delete",
        accessor: (str) => "delete",

        Cell: (tableProps) => (
          <div>
            <button className="bg-[#438FFE] mx-2 w-32 text-white py-2 px-2 text-sm rounded-lg hover:bg-[#2563EB]">
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

 

  return (
    <div className="min-h-screen lg:mx-12 bgr text-gray-900">
      <div className="flex items-center justify-end items-center ">
        <Datepicker />
       <Modal/>
      </div>
      <Mytab />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-white ">
        <div className="">
          
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
