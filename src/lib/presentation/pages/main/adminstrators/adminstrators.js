import React, { useState, useEffect } from "react";
import AdminPage from "./adminPage";
import PuffLoader from "react-spinners/PuffLoader";



function Adminstrators() {
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
        <div className="flex h-[90vh] justify-center bg-white items-center"><PuffLoader size={80} color={"#438FFE"} loading={loading}  /></div>
      ) : (
        <div className="p-4">
          <div className="statistic">
            <AdminPage />
          </div>
        </div>
      )}
    </div>
  );
}

export default Adminstrators;
