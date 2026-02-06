import React from "react";
import "./about.css";
import about from "../../images/about.png";
const About = () => {
  return (
    <section className="about">
      <h1>
        “Thanks to Bookshop, there is no reason to buy books on Amazon anymore.”{" "}
      </h1>
      <div className="card">
        <div className="card-cont">
          <p>
            Welcome to our{" "}
            <span>
              <a href="/"> eBook store</a>{" "}
            </span>
            , your gateway to a world of digital reading. We offer a wide range
            of eBooks—from bestsellers to hidden indie gems. Instantly download
            titles and start reading across all your devices. Our mission is to
            make reading affordable, accessible, and enjoyable. Enjoy
            personalized recommendations based on your reading habits. We
            support independent authors and promote diverse voices. New titles
            are added weekly to keep your library fresh. Flexible pricing and
            frequent deals for avid readers. Join our reading community and
            explore user reviews and ratings. Your next favorite book is just a
            click away.
          </p>
         
          <img src={about} alt="img" />
          <div className="containerb">
            <h4>Our Story</h4>
            <p>
              Founded with a passion for literature and history, Our journey
              began with a simple idea: to create a haven for rare and valuable
              books that Over the years, we have meticulously curated our
              collection to include not only first editions and rare finds but
              also out-of-print works that are often forgotten in the digital
              age.
            </p>



            <h4>What We Offer</h4>

            <h5>Rare Books</h5>
            <p>
              Our rare books selection features limited prints, unique editions,
              and hard-to-find volumes that are treasured by collectors and
              scholars alike. Each book is a testament to the enduring legacy of
              great literature.
            </p>

            <h5>Our Commitment</h5>
            <p>
            At Gem Book Store, we are committed to providing our customers with exceptional service and unparalleled quality. Each book and print in our collection is carefully inspected for authenticity and condition. We take pride in offering detailed descriptions and high-resolution images to ensure that you know exactly what you are purchasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
