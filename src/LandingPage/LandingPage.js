import React from "react";
import "./LandingPage.css";
import LNavbar from "./LNavbar";
import LSection1 from "./LSection1";
import LSection2 from "./LSection2";
import LSection3 from "./LSection3";
import LSection4 from "./LSection4";
import LFooter from "./LFooter";
export default function LandingPage() {
  return (
    <div className="whole">
      <LNavbar />
      <LSection1 />
      <LSection2 />
      <LSection3 />
      <hr />
      <LSection4 />
      <LFooter />
    </div>
  );
}
