import ContactForm from "../contents/ContactForm";
import SectionContainer from "../utils/SectionsContainer";

const ContactLayout = () => {
    return (
      <div className="w-full">
        <SectionContainer fullWidth>
            <ContactForm/>
        </SectionContainer>
      </div>
    );
  };
  
  export default ContactLayout;