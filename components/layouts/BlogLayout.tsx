import { BlogPosts } from "../contents/Blog";
import BlogHero from "../contents/BlogHero";

import SectionContainer from "../utils/SectionsContainer";

const BlogLayout = () => {
    return (
      <div className="w-full">
        <SectionContainer fullWidth>
          <BlogHero/>
          <BlogPosts/>
        </SectionContainer>
      </div>
    );
  };


  export default BlogLayout;