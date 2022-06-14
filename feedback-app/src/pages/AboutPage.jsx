import React from "react";
import Card from "../components/shared/Card";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AboutPage = (props) => {
  return (
    <Card>
      <div className="about">
        <h1>about this</h1>
      </div>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </Card>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
