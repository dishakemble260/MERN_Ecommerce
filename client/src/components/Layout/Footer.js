import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <h6 className="text-centre"> All Right Reserved &copy; EcomApp </h6>
        <p className='text-centre mt-2'>
          <Link to="/about"> About </Link>|
          <Link to="/contact"> Contact </Link>|
          <Link to="/policy"> Privacy Policy </Link>
        </p>
    </div>
  )
}

export default Footer