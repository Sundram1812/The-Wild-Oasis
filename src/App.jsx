import React from "react";

// import styled from "styled-components";
// import GlobalStyle from "./styles/GlobalStyle";
// import Button from "./ui/Button";
// import Input from "./ui/Input";
// import H1 from "./ui/Heading";
// import Row from "./ui/Row";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <>
<GlobalStyle/>
<div>
  <Row>
    <H1 as='h1'>The wild oasis</H1>
    <div>
      <H1 as='h2'>Check in out button</H1>
      <Button size={"medium"} variation='danger'>Check in</Button>
      <Button size={"large"} variation="primary">Check out</Button>
    </div>
  </Row>

  <H1 as='h3'>Form</H1>
  <Row direction='vertical'>
    <Input type='number' placeholder="number of guest"/>
    <Input type='number' placeholder="number of guest"/>
    <Input type='number' placeholder="number of guest"/>
  </Row>
</div>
</> */
}
