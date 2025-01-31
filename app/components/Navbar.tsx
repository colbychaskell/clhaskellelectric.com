import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/logo.png'

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <Image
          style={{ height: "40px" }}
          id='logo'
          src={logo}
          alt="C.L. Haskell & Son Inc." className="ms-3" />
      </Link>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3' /> */}
      <div>
        <nav className="ms-auto me-3">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
