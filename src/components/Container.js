import React from "react";
import DevImg from "./DevImg";
import SkillsContainer from "./SkillsContainer";
import BIO from "./BIO";
import DevName from "./DevName";
export default function Container() {
  return (
    <div className="container">
      <DevImg />
      <DevName />
      <BIO />
      <SkillsContainer />
    </div>
  );
}
