import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Mainlayout from "../../presentation/layout/mainlayout";
import Login from "../../presentation/pages/auth/login";
import Adminstrators from "../../presentation/pages/main/adminstrators/adminstrators";
import Completed from "../../presentation/pages/main/completed/completed";

function Routing() {
  return (
    <div>
      <Routes>
        {/* Auth Routes */}
        <Route path="auth">
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Main Routes */}
        <Route
          path="/"
          element={
            <>
              <Mainlayout />
            </>
          }
        >
          <Route index element={<Navigate replace to="administrator" />} />
          <Route path="administrator" element={<Adminstrators />} />
          <Route path="completed" element={<Completed />} />
        </Route>

        {/* Not found */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-muted">
              You have hit the end of the road!
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default Routing;
