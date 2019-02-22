import React from "react";
import ReactDOM from "react-dom";

import ColorDemo from "./color-demo";

class AppContainer extends React.Component<any, any> {
  render() {
    return (
      <>
        <ColorDemo />
      </>
    );
  }
}

function renderApp() {
  ReactDOM.render(<AppContainer />, document.querySelector("#app_container"));
}

window.onload = renderApp;

declare var module: any;
if (module.hot) {
  module.hot.accept([], () => {});
}
