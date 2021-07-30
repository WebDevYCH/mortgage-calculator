import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import QuoteDetailFirst from "../pages/quotedetailfirst/quotedetailfirst";
import QuoteDetailSecond from "../pages/quotedetailsecond/quotedetailsecond";
import ProcessBar from "../pages/processbar/processbar";
import HomePage from "../pages/homepage.js";
import TermsPage from '../pages/TermsPage'
import SignInPage from "../pages/signinpage";
import PrivacyPage from '../pages/privacypage';

function Routes() {
  return (
      <Switch>
        <Route
          exact
          path={`/quotedetailfirst`}
          component={QuoteDetailFirst}
          />
        <Route
          exact
          path={`/quotedetailsecond`}
          component={QuoteDetailSecond}
        />
        <Route
          exact
          path={`/processbar`}
          component={ProcessBar}
        />
        <Route
          exact
          path={`/homepage`}
          component={HomePage}
        />    
        <Route
          exact
          path={`/login`}
          component={SignInPage}
        />    
        <Route
          exact
          path={`/privacy`}
          component={PrivacyPage}
        />
        <Route exact path={`/termsandcondition`} component={TermsPage} />
        <Redirect from="/" to='homepage' />
      </Switch>

  );
}

export default Routes;
