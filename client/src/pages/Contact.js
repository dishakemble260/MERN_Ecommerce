import React from 'react';
import Layout from '../components/Layout/Layout';

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div>
          <img
            src="contactus.jpg"
            alt="contact-us"
            style={{ width: "40%" }}
          />
        </div>
        <div className="row-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify ">
            Any query and info about product feel free to call anytime. We are available 24X7
            
          </p>
          <p className="mt-3">
           Visit : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            Need Help? : 012-3456789
          </p>
          <p className="mt-3">
            Phone : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact