
import SectionContainer from "../utils/SectionsContainer";
import RecruitmentHero from "../contents/RecruitementHero";
import RecruitmentCard from "../contents/RecruitmentCard";


const RecruitmentLayout = () => {
        return (
            <div className="w-full">
                <SectionContainer fullWidth>
                    <RecruitmentHero />
                    <RecruitmentCard />
                </SectionContainer>
            </div>
        );
    };
    
    export default RecruitmentLayout;