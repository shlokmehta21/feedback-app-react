import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
          libero exercitationem sint repellendus natus, ducimus fugit distinctio
          sed, ipsa vero laudantium omnis asperiores magni aliquid quo sapiente
          laborum officia earum!
        </p>
        <p>Version 1.00</p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
