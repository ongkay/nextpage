import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children, home }) {
  return (
    <>
      <div className="  bg-[#191919] text-white max-w-screen-2xl mx-auto overflow-x-hidden">
        <Navbar />

        {children}
      </div>

      <Footer />
    </>
  )
}
