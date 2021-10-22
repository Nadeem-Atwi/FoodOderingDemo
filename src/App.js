import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/Auth/context/AuthContext";
import Login from "./components/Auth/Login";
// import Menucontent from "./components/menuContent/Menucontent";
import Header from "./components/Layout/Header";
import DashBoard from "./components/Auth/DashBoard";
// import About from "./components/About";
import PrivateRoute from "./components/Auth/PrivateRoute";

import ForgotPassword from "./components/Auth/context/ForgotPassword";
import History from "./components/Auth/History";
import React, { Suspense } from "react";

const About = React.lazy(() => import("./components/About"));
const Menucontent = React.lazy(() =>
  import("./components/menuContent/Menucontent")
);

function App() {
  return (
    <Container>
      <div className="w-200">
        <Router>
          <Header />
          <AuthProvider>
            <Suspense fallback={<p>loading...</p>}>
              <Switch>
                <Route exact path="/" component={Menucontent} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/menu" component={Menucontent} />
                <Route path="/history" component={History} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute path="/dashbord" component={DashBoard} />
                <Route path="/about" component={About} />
              </Switch>
            </Suspense>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;

//todo

//fix header buttons ///done

//fix the img thing in the menu

//login and register should  be in a modals ///fuckit

// cart button only visible if logged in ///done

//fix the fucking modal, i dont know what i did //check Menucontent /// fixed
