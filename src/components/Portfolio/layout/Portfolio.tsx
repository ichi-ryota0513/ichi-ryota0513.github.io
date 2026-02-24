import Header from "./Header"
import Skills from "../main/Skills"
import Profile from "../main/Profile"
import Products from "../main/Products"
import Milestones from "../main/Milestones"
import Footer from "./Footer"

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
