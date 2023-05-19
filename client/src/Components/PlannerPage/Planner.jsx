import React from "react";
import {
  AddPlanButton,
  PlannerContainer,
  PlannerDiary,
  PlannerLogo,
  PlannerMaps,
} from "./PlannerSty";
import testgoogle from "../PlannerPage/images/testmap.png";

const Planner = () => {
  return (
    <PlannerContainer>
      <PlannerLogo>Planner</PlannerLogo>
      <PlannerMaps>
        <img src={testgoogle} alt="" />
      </PlannerMaps>
      <PlannerDiary>
        <AddPlanButton>+</AddPlanButton>
      </PlannerDiary>
    </PlannerContainer>
  );
};

export default Planner;
