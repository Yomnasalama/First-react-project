import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg main-color fw-bolder fixed-top">
        <div className="container-fluid p-3 ps-5 pe-5 me-5 ms-5">
          <a className="navbar-brand font-color fs-2 fw-bold" href="#">START FRAMEWORK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item m-3">
                <Link className="nav-link font-color active fw-bold" aria-current="page" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item  m-3">
                <Link className="nav-link font-color fw-bold " to="/portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item  m-3">
                <Link className="nav-link font-color fw-bold" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
