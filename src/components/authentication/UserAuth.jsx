import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const UserAuth = ({ onClose, onLogin }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const popupContainerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const popupStyle = {
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
    background: "#fff",
    width: "100%",
    maxWidth: "400px",
    position: "relative",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#000",
  };

  return (
    <div style={popupContainerStyle}>
      <div style={popupStyle}>
        <Typography variant="h5" color="black">
          Please Login to continue
        </Typography>
        <button style={closeButtonStyle} onClick={onClose}>
          &times;
        </button>
        <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Sign up" />
          <Tab label="Sign in" />
        </Tabs>
        <Box marginBottom="20px">
          {activeTab === 0 ? (
            <Register onLogin={onLogin} />
          ) : (
            <Login onLogin={onLogin} />
          )}
        </Box>
        <hr className="text-gray-500"/>
        <div className="flex justify-evenly text-2xl mt-4 p-2">
          <BsInstagram className="text-rose-600 cursor-pointer" />
          <FaFacebook className="text-blue-800 cursor-pointer" />
          <FaYoutube className="text-red-700 cursor-pointer" />
          <FaWhatsapp className="text-green-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
