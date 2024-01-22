import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import FacebookMsg from "../components/FacbookMsg";
import Link from "next/link";
import * as fbq from "../utils/facebook-pixel"


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
      <div>
      <h1>
        Go to `pages/_app.js` to see how you can add Facebook Pixel to your app
      </h1>
      
      <p>
        Click the link below to navigate to another page.
        <br />
        <Link href="/navigation">Navigation page</Link>
      </p>
    </div>
      
    </main>
  )
}
