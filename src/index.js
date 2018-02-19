import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

import { AppContainer } from "react-hot-loader"

const render = component =>
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,

    document.getElementById("root"),
  )

registerServiceWorker()

render(App)

if (module.hot) {
  module.hot.accept("./App", () => {
    render(App)
  })
}
