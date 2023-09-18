import { Outlet } from "react-router-dom"
import './assets/styles/global.css'
import Layout from "./components/Layout/Layout"
import { AppProvider } from "./context/AppContext"
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton"

function App() {

  return (
    <AppProvider>
      <Layout>
        <ScrollUpButton />
        <Outlet />
      </Layout>
    </AppProvider>
  )
}

export default App