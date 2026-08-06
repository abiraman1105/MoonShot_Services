import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import BackToTop from '../components/BackToTop/BackToTop.jsx'

function MainLayout() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default MainLayout
