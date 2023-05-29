import React, { useEffect } from "react";
import ModeProvider from "../../context/mode/mode";
import { ErrorPage, Layout } from "../index";
import { Route, Routes } from "react-router-dom";
import {  Home, Products } from "../../pages";
import { Login } from "../../pages/login/login";
import { Register } from "../../pages/register/register";
import Users from "../../pages/users/users";
import Message from "../../pages/Message/message";
import Info from "../../pages/info/info";
import { useAuthToken } from "../../context/context";
import Category from "../../pages/category/category";
import CreateProduct from "../../pages/products/create";

const App = () => {
  const { token, setToken } = useAuthToken();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <ModeProvider>
      <>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<ErrorPage />} />

            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/create/:id" element={<CreateProduct />} />
            <Route path="/category" element={<Category />} />
            <Route path="/users" element={<Users />} />
            <Route path="/message" element={<Message />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </Layout>
      </>
    </ModeProvider>
  );
};

export default App;
