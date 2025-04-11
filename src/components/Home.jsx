// pages/Home.jsx
import { Banner } from "./PresentationBanner";
import { ItemListContainer } from "./ItemListContainer";
import { PageWrapper } from "./FramerMotion"

export const Home = () => {
  return (
    <>
    <PageWrapper>
        <Banner />
        <ItemListContainer />
    </PageWrapper>
    </>
  );
};