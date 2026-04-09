import Clients from "@/components/Clients";
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl">
        <FloatingNav
         navItems={navItems}
        />
        <Hero/>
        <Grid/>
        <Services/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Footer/>
       </div>
    </main>
  );
}
