// HomeLayout.tsx
import Hero from "../contents/Hero";
import Information from "../contents/Information";
import SectionContainer from "../utils/SectionsContainer";

const HomeLayout = () => {
  return (
    <div className="w-full">
      <SectionContainer fullWidth>
        <Hero />
        <Information />
      </SectionContainer>
    </div>
  );
};

export default HomeLayout;
