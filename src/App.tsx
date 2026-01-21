import Header from "./components/Header"
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Products from "./components/Products"
import Milestones from "./components/Milestones"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <Skills />
        <Products />
        <Milestones />
      </main>
      <Footer />
    </>
  )
}

export default App
