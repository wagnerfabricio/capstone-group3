import { Switch } from "react-router-dom";
import Route from "./Route";
import { useAuth } from "../providers/Auth";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";
import DashboardClient from "../pages/DashboardClient";
import DashboardAdm from "../pages/Dashboard2";
import Anamnese from "../components/Anamnese";
import PageNotFound from "../pages/PageNotFound";

const Routes = () => {

  return (
    <AnimatePresence>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} path="/login" />
        <Route component={Signup} path="/signup" />
        <Route component={Dashboard} isPrivate path="/dashboard" />
        <Route component={DashboardAdm} isPrivate path="/dashboardAdm" />
        <Route component={DashboardClient} isPrivate path="/dashboardClient" />
        <Route component={About} path="/about" />
        <Route component={Anamnese} isPrivate path="/anamnese" />
        <Route component={PageNotFound} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
