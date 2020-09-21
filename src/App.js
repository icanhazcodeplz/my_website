import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are custom building it */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import PageRenderer from "PageRenderer.js";
import MainLandingPageNew from "MainLandingPageNew.js";
import LandingPage from "LandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import Footer from "components/footers/SmallCenteredFooter.js";


export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
          <Route path="/:name">
            <AnimationRevealPage>
              <PageRenderer />
              <Footer />
            </AnimationRevealPage>
          </Route>
          <Route path="/">
            <AnimationRevealPage>
              <LandingPage />
              <Footer />
            </AnimationRevealPage>
          </Route>
      </Switch>
    </Router>
  );
}
