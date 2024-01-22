import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import FacebookMsg from "../components/FacbookMsg";


export default function Home() {
  const handleClick = () => {
    fbq.event("Purchase", { currency: "USD", value: 10 });
  };
  
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
      <FacebookMsg blogs={allBlogs} />
      
    </main>
  )
}
