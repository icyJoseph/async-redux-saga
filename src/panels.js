import React from "react";
import App from "./containers/App";
import PanelMixed from "./containers/Panel";
import PanelMixed2 from "./containers/Panel2";
import PanelMixed3 from "./containers/Panel3";

export const Panels = () => (
  <App>
    <PanelMixed />
    <PanelMixed2 />
    <PanelMixed3 />
  </App>
);

export default Panels;
