import AboutHero from "../contents/AboutHero";
import SectionContainer from "../utils/SectionsContainer";

const AboutLayout = () => {
    return (
      <div className="w-full">
        <SectionContainer fullWidth>
          <AboutHero />
        </SectionContainer>
      </div>
    );
  };


  export default AboutLayout;