import BlogHero from "../contents/BlogHero";
import Blog from "../contents/Blog"
import SectionContainer from "../utils/SectionsContainer";

const BlogLayout = () => {
    return (
      <div className="w-full">
        <SectionContainer fullWidth>
          <BlogHero/>
          <Blog/>
        </SectionContainer>
      </div>
    );
  };


  export default BlogLayout;