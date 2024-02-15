
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page bg-red-300 ">
      <h1 className="about-page__title text-center pt-8">About Us</h1>
      <div className="about-page__content">
        <p className="about-page__text">
          Our company was founded in 2010 with a simple mission: to provide high-quality, affordable products to customers worldwide. Over the years, we've grown into a trusted brand with a loyal customer base, thanks to our commitment to exceptional customer service, innovative design, and sustainable practices.
        </p>
        <h2 className="about-page__subtitle">Our Team</h2>
        <ul className="about-page__team-list">
          <li className="about-page__team-member">
            <img src="https://via.placeholder.com/150" alt="Team member" className="about-page__team-image" />
            <h3 className="about-page__team-name">John Doe</h3>
            <p className="about-page__team-position">CEO</p>
          </li>
          <li className="about-page__team-member">
            <img src="https://via.placeholder.com/150" alt="Team member" className="about-page__team-image" />
            <h3 className="about-page__team-name">Jane Smith</h3>
            <p className="about-page__team-position">COO</p>
          </li>
          <li className="about-page__team-member">
            <img src="https://via.placeholder.com/150" alt="Team member" className="about-page__team-image" />
            <h3 className="about-page__team-name">Bob Johnson</h3>
            <p className="about-page__team-position">CTO</p>
          </li>
        </ul>
        <h2 className="about-page__subtitle">Our Values</h2>
        <ul className="about-page__values-list">
          <li className="about-page__value-item">Quality</li>
          <li className="about-page__value-item">Innovation</li>
          <li className="about-page__value-item">Sustainability</li>
          <li className="about-page__value-item">Customer Service</li>
        </ul>
      </div>
    </div>
  );
};

export default About;