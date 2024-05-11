import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faPlay,
  faCreditCard,
  faRobot,
  faBell,
, faUser} from "@fortawesome/free-solid-svg-icons";
import { mole1 } from "../assets";
import Button from "../components/Button";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const UserHeader = () => {
  return (
    <div className="w-full h-[12%] bg-[#020203] flex justify-between px-4">
      <div className="h-full w-1/4 flex items-center space-x-4">
        <Link to="/user">
          {" "}
          {/* Wrap the img with Link */}
          <img src={mole1} className="w-24 aspect-square" alt="Logo" />
        </Link>
        <div className="w-2/3 h-1/2 border-2 rounded-full border-purple-800 flex space-x-2 justify-center items-center px-4">
          <FontAwesomeIcon icon={faSearch} className="text-white" />
          <input
            id="search"
            type="search"
            placeholder="Хайлт"
            className="w-full h-full rounded-full bg-[#020203] text-white outline-none"
          />
        </div>
      </div>
      <div className="w-1/4 h-full flex justify-center items-center">
        <Button className="text-white" href="/user">
          <FontAwesomeIcon icon={faHome} className="w-6" />
        </Button>
        <Button className="text-white" href="/task">
          <FontAwesomeIcon icon={faPlay} className="w-6" />
        </Button>
        <Button className="text-white">
          <FontAwesomeIcon icon={faCreditCard} className="w-6" />
        </Button>
        <Button className="text-white">
          <FontAwesomeIcon icon={faRobot} className="w-6" />
        </Button>
      </div>
      <div className="w-1/6 h-full flex justify-center items-center space-x-4">
        <Button className="text-white">
          <FontAwesomeIcon icon={faBell} className="w-6" />
        </Button>
        <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default UserHeader;
