import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import AuthForm from "./components/AuthForm";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/login" element={<AuthForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
