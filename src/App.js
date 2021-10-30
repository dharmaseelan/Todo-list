import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import "animate.css";
import { useHistory } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoggedInView>
              <Home />
            </LoggedInView>
          </Route>
          <Route path="/support">
            <LoggedInView>
              <Support />
            </LoggedInView>
          </Route>
          <Route path="/privacy">
            <LoggedInView>
              <Privacy />
            </LoggedInView>
          </Route>
          <Route path="/profile">
            <LoggedInView>
              <Profile />
            </LoggedInView>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LoggedInView({ children }) {
  let history = useHistory();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default App;
