import React from "react";
import Govt from "../assets/Icon1.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mx-auto p-5">
        <Link to="/">
          <img
            src={Govt}
            alt="Ministry of Agriculutre"
            style={{ width: "175px", padding: "5px" }}
          />
        </Link>
        <div>
          <ul className="flex gap-7 font-semibold font-poppins justify-end pr-9">
            <Link to="/">
              <li className="relative hover:text-lime-500 hover:after:content-['•'] hover:after:absolute hover:after:bottom-[-10px] hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:text-lg hover:after:leading-none">
                Home
              </li>
            </Link>

            <Link to="/About">
              <li className="relative hover:text-lime-500 hover:after:content-['•'] hover:after:absolute hover:after:bottom-[-10px] hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:text-lg hover:after:leading-none">
                About
              </li>
            </Link>
            <Link to="/signin">
              <li className="relative hover:text-lime-500 hover:after:content-['•'] hover:after:absolute hover:after:bottom-[-10px] hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:text-lg hover:after:leading-none">
                SignIn
              </li>
            </Link>
            <Link to="/signup">
              <li className="relative hover:text-lime-500 hover:after:content-['•'] hover:after:absolute hover:after:bottom-[-10px] hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:text-lg hover:after:leading-none">
                SignUp
              </li>
            </Link>
            <Link to="/contactus">
              <li className="relative hover:text-lime-500 hover:after:content-['•'] hover:after:absolute hover:after:bottom-[-10px] hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:text-lg hover:after:leading-none">
                ContactUs
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
