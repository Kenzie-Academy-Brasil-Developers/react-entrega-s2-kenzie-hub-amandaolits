import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@Kenziehub:user"));
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    setUserName(user);
    setUserToken(token);

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          userName={userName}
          userToken={userToken}
        />
      </Route>
    </Switch>
  );
};

export default Routes;