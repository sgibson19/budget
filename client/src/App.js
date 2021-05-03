import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//routing
import PrivateRoute from './components/routing/PrivateRoute';

// screens
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import PrivateScreen from './components/PrivateScreen';
import ResetPasswordScreen from './components/ResetPasswordScreen';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
