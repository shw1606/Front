/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { withRouter } from "react-router-dom";

// components
import Recent from "./recent";
import Trending from "./trending";

const HomePostLayout = ({ location }) => (
  <>
    <main>{location.pathname === "/" ? <Trending /> : <Recent />}</main>
  </>
);

export default withRouter(HomePostLayout);
