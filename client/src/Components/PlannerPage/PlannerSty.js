import { styled } from "styled-components";

export const PlannerContainer = styled.div`
  display: flex;
  border: none;
  border-radius: 30px;
  background-color: transparent;
  width: 1700px;
  height: 700px;
  margin: 100px;
  justify-content: space-between;
`;

export const PlannerMaps = styled.div`
  border: none;
  border-radius: 30px;
  background-color: white;
  width: 1000px;
  height: 700px;
  margin: 0 50px 50px 50px;

  box-shadow: 1px 1px 6px 1px gray;
  img {
    border: none;
    border-radius: 30px;
    padding: 1rem;
    width: 970px;
    height: 670px;
  }
`;

export const PlannerDiary = styled.div`
  border: none;
  border-radius: 30px;
  background-color: white;
  width: 500px;
  height: 700px;
  margin: 0 50px 50px 50px;
  box-shadow: 1px 1px 6px 1px gray;
`;

export const AddPlanButton = styled.button`
  position: relative;
  bottom: -95%;
  left: 50%;
  outline: none;
  border-radius: 10px;
  background-color: lightgray;
  &:hover {
    background-color: gray;
  }
`;

export const PlannerLogo = styled.div`
  position: absolute;
  top: 80px;
  left: 45%;
  bottom: 0;
  font-size: 50px;
  margin: auto;
  font-family: "Dancing Script", cursive;
`;
