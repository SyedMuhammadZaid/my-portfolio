import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Resume from "./components/Resume"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Technologies from "./components/Technologies"
import { ToastContainer } from 'react-toastify';


export default function Home() {
  return (
    <main className="relative">
      <ToastContainer />
      <Navigation />
      <Hero />
      <Services />
      <Technologies />
      <Resume />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}
