import Activity from "../contents/Activity";
import Blog from "../contents/Blog";
import Hero from "../contents/Hero";
import Information from "../contents/Information";
import SectionContainer from "../utils/SectionsContainer";

const HomeLayout = () => {
  return (
    <div className="w-full">
      <SectionContainer fullWidth>
        <Hero />
        <Information/>
        <Blog/>
        <Activity/>
      </SectionContainer>
    </div>
  );
};

export default HomeLayout;
