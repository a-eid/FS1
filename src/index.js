import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import store from "./store/configureStore"

import { AppContainer } from "react-hot-loader"

const render = component =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,

    document.getElementById("root"),
  )

registerServiceWorker()

render(App)

if (module.hot) {
  module.hot.accept("./App", () => {
    render(App)
  })
}
