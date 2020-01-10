import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CombinationLock from "./CombinationLock/CombinationLock";
import Calculator from "./Calculator/Calculator";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={CombinationLock} />
      <Route path="/calculator" component={Calculator} />
      <Route render={() => <h1>Not found</h1>} />
    </Switch>
  </Layout>
);

export default App;