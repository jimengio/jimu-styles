import React from "react";
import ReactDOM from "react-dom";

function renderApp() {
  ReactDOM.render(<div>test</div>, document.querySelector("#app_container"));
}

window.onload = renderApp;

declare var module: any;
if (module.hot) {
  module.hot.accept([], () => {});
}
