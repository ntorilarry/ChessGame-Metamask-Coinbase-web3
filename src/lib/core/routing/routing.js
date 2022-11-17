import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Mainlayout from "../../presentation/layout/mainlayout";
import { AuthProvider } from "../../presentation/pages/auth/auth";
import Login from "../../presentation/pages/auth/login";
import { Requireauth } from "../../presentation/pages/auth/requireauth";
import Adminstrators from "../../presentation/pages/main/adminstrators/adminstrators";
import Completed from "../../presentation/pages/main/completed/completed";
import Joingame from "../../presentation/pages/main/game/joingame";

function Routing() {
  return (
    <div>
      <AuthProvider>
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
          <Route path="/">
            <Route path="join-game" element={<Joingame />} />
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
      </AuthProvider>
    </div>
  );
}

export default Routing;
