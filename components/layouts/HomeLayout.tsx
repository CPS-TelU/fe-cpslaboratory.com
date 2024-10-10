import Activity from "../contents/HomeActivity";
import { Blog } from "../contents/HomeBlog";
import Hero from "../contents/HomeHero";
import Information from "../contents/HomeInformation";
import SectionContainer from "../utils/SectionsContainer";

const HomeLayout = () => {
  return (
    <div className="w-full">
      <SectionContainer fullWidth>
        <Hero />
        <Information/>
        {/* <Blog/> */}
        <Activity/>
      </SectionContainer>
    </div>
  );
};

export default HomeLayout;
