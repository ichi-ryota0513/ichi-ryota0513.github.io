import Portfolio from "../Portfolio/layout/Portfolio"
import BusinessCard from "../BusinessCard/BusinessCard"
import { Routes, Route } from "react-router-dom";

function AppLayout() {
  return (
    <>
    <Routes>
      <Route
        path="/"
        element={<Portfolio />}
      />

      <Route
        path="/business-card"
        element={<BusinessCard />}
      />
    </Routes>
    </>
  )
}

export default AppLayout
