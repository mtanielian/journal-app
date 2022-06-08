import AppRouter from "./components/routers/AppRouter"
import { UiContextProvicer } from "./contexts/UiContext"

const JournalApp = () => {
  return (
    <UiContextProvicer>
      <AppRouter />
    </UiContextProvicer>
  )
}

export default JournalApp