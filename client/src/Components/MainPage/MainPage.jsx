import React from "react";
import { MainPageContainer } from "./MainPageSty";
import ImageBanner from "./banner/ImageBanner";
import ImageGrid from "./ImageGrid/ImageGrid";

const MainPage = () => {
  return (
    <MainPageContainer>
      <ImageBanner />
      <ImageGrid />
    </MainPageContainer>
  );
};

export default MainPage;
