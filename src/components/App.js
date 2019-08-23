import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from 'reactstrap'

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";

import 'bootstrap/scss/bootstrap.scss';

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Container>
  );
}

export default App;
