import DetailBlog from "@/components/contents/DetailBlog";
import BlogLayout from "@/components/layouts/BlogLayout";

export default function BlogDetail() {
    return (
      <main className="relative flex flex-col items-center justify-center px-4 pt-20 z-[999]">
        <DetailBlog post={null} relatedPosts={[]}/>
      </main>
    );
  }