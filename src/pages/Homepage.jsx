import React from "react";
import HomepageBanner from "../components/HomepageBanner";

const Homepage = () => {
  const logo = document.querySelectorAll("#welcomeAnimation path");
  console.log(logo.length);
  for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
  }
  return (
    <div className="homepage">
      <div className="homepage__banner">
        <HomepageBanner />
      </div>
    </div>
  );
};

export default Homepage;
