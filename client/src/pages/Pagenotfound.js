import React from 'react'
import {Link} from "react-router-dom"
import Layout from '../components/Layout/Layout'

const Pagenotfound = () => {
  return (
    <Layout>
      <div className='pnf'>
        <h1 className='pnf-title'>404</h1>
        <h3 className='pnf-heading'>Oops! Page Not Found </h3>
        <Link to="/" className="pnf-btn">Go back</Link>
      </div>
     </Layout>
  );
};

export default Pagenotfound