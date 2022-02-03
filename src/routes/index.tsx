import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";
import DashboardClient from "../pages/DashboardClient";
import DashboardAdm from "../pages/Dashboard2";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} path="/login" />
        <Route component={Signup} path="/signup" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={DashboardAdm} path="/dashboardAdm" />
        <Route component={DashboardClient} path="/dashboardClient" />
        <Route component={About} path="/about" />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
