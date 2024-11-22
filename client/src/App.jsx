import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import ContactUs from "./pages/Contactus";
import 'typeface-poppins';
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import SideBar from "./components/SideBar";
 import { SideBarProvider } from "./components/SideBar";

const header2Routes = [
  "/dashboard",
  "/contactus",
  // Add future routes here
  // You can also use pattern matching if needed
  // "/admin/*",    // Example: all admin routes
  // "/settings/*"  // Example: all settings routes
];

function ProtectedLayout(){
  return(
    <div className="flex">
      <SideBar/>
      <div className="flex-1">
      <Outlet/>
      </div>
    </div>
  )
}

function AppContent() {
  const location = useLocation(); // Correct use of useLocation

  const showHeader2 = header2Routes.some(route => 
    route.endsWith('*') 
      ? location.pathname.startsWith(route.replace('*', ''))
      : location.pathname === route
  );

  return (
    <div>
      {!showHeader2 ? <Header /> : <Header2 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        
        <Route element={<PrivateRoutes/>}>
        <Route element={<ProtectedLayout/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
        </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SideBarProvider>
      <AppContent />
      </SideBarProvider>
    </BrowserRouter>
  );
}
