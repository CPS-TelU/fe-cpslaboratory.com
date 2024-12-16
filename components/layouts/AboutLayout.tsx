import AboutHero from "../contents/AboutHero";
import SectionContainer from "../utils/SectionsContainer";
import {Gallery} from "@/components/contents/AboutGallery";
import { AssistCard } from "@/components/contents/AboutAssistants";
import Header from "../Header";

const AboutLayout = () => {
    return (
      <div className="w-full">
        <SectionContainer fullWidth>
          <AboutHero />
          <Gallery/>
          {/* <AssistCard/> */}
        </SectionContainer>
      </div>
    );
  };


  export default AboutLayout;