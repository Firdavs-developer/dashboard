import React, { useEffect, useState } from "react";
import body from "./header.module.scss";
import { NavLink, useFetcher } from "react-router-dom";
import { FaTh, FaBars, FaHome } from "react-icons/fa";
import { FaOpencart, FaUserCircle } from "react-icons/fa";
import {
  MessageOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  LoginOutlined,
  UsergroupAddOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { useAuthToken } from "../../context/context";

const Sidebar = () => {
  const { token, setToken } = useAuthToken();

  const menuItem = [
    {
      path: "/register",
      name: "Register",
      
      // icon: <LoginOutlined />,
    },

    {
      path: "/login",
      name: "Login",
      
      // icon: <FaUserCircle />,
    },
    {
      path: "/users",
      name: "Users",
      
      // icon: <UsergroupAddOutlined />,
    },
    {
      path: "/products",
      name: "Products",
      
      // icon: <FaOpencart />,
    },
    {
      path: "/category",
      name: "Category",
      
      // icon: <FileProtectOutlined />,
    },
    {
      path: "/message",
      name: "Message",
      
      // icon: <MessageOutlined />,
    },
  ];

  const [isOpen, setIsOpen] = useState(true);

  //   useEffect(() => {
  //     setIsOpen(localStorage.getItem("isOpen"));
  //   }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
    localStorage.setItem("isOpen", isOpen);
  };
  return (
    <div
      className={body.header}
      style={{ width: isOpen ? "300px" : "50px", transition: "0.5s" }}
    >
      <div className={body.top_section}>
        <h1
          className={body.logo}
          style={{ display: isOpen ? "block" : "none" }}
        >
          Dashboard
        </h1>
        <div
          className={body.bars}
          style={{ marginLeft: isOpen ? "50px" : "-7px" }}
        >
          {/* <FaBars onClick={toggle} /> */}
        </div>
      </div>
      {menuItem.map((item, index) => {
        return (
          <NavLink
            to={item.path}
            key={index}
            className={body.link}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                background: isActive ? "lightskyblue" : "",
              };
            }}
          >
            <div className={body.icon}>{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className={body.link_text}
            >
              {item.name}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
