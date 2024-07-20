import PostCard from "@/components/ui/daisyui-postcard";
import NewsFeed from "@/components/ui/feeds-handler";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  navigationMenuTriggerStyle, 
  NavigationMenuLink 
  
} from "@/components/ui/navigation-menu";
import Header from "@/components/ui/tailwind-header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Header />
        {/* <PostCard /> */}
        <NewsFeed/>
      </div>
    </main>
  );
}
