import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { NhostClient, NhostReactProvider } from "@nhost/react";

import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_DOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,
});

function App() {
  return (
    <>
      <NhostReactProvider nhost={nhost}>
        <BrowserRouter>
          <Routes>
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NhostReactProvider>
      <Toaster />
    </>
  );
}

export default App;
