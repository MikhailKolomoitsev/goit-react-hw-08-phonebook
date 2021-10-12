import "./App.css";
import React, { useState, useEffect, Suspense } from "react";
import UserPage from "components/UserPage";
import { routes } from "routes";
import { Registration } from '../src/components/login/components/Registration'
import { Login } from '../src/components/login/components/Login'
import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={routes.home} exact component={UserPage}></Route>
        <Route path={routes.registration} exact component={Registration}></Route>
        <Route path={routes.login} exact component={Login}></Route>
    </Switch>
</Suspense>

  )
}

