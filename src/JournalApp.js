import { Provider } from "react-redux"
import { store } from "./store/store"
import { UiContextProvicer } from "./contexts/UiContext"

import AppRouter from "./components/routers/AppRouter"


const JournalApp = () => {
  return (
    <Provider store={store}>
      <UiContextProvicer>
        <AppRouter />
      </UiContextProvicer>
    </Provider>
  )
}

export default JournalApp