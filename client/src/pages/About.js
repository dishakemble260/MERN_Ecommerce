import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to our clothing store. We are more than just a fashion brand, we are a statement of style, individuality, 
          and confidence. Our journey began with a simple vision - to empower people to express themselves through their clothing 
          choices.We believe that what you wear should not only reflect your unique personality but also 
          make you feel comfortable and confident in your own skin. Our collection is carefully curated to offer a diverse range of styles,
          from timeless classics to the latest fashion trends, ensuring that there's something for everyone.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About