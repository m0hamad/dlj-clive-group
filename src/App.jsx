import { Outlet } from "react-router-dom"
import './assets/styles/global.css'
import Layout from "./components/Layout/Layout"
import { AppProvider } from "./context/AppContext"

function App() {

  return (
    <AppProvider>
      <Layout>
        <Outlet />
      </Layout>
    </AppProvider>
  )
}

export default App