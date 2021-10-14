import "./App.css";
import React, { useState, useEffect, Suspense } from "react";
import UserPage from "components/UserPage";
import { routes } from "utils/routes";
import { Registration } from '../src/components/login/components/Registration'
import { Login } from '../src/components/login/components/Login'
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PrivateRoute component={UserPage} path={routes.home} exact />
        <PublicRoute path={routes.registration} exact component={Registration} />
        <PublicRoute path={routes.login} exact component={Login} />
      </Switch>
    </Suspense>

  )
}

