import "./App.css";
import React, { useState, useEffect, Suspense } from "react";
// import Form from "./components/Form/Form";
// import ListContacts from "./components/ListContacts/ListContacts";
// import Filter from "./components/Filter/Filter";
import UserPage from "components/UserPage";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={routes.home} exact component={UserPage}></Route>
    </Switch>
</Suspense>

  )
}

