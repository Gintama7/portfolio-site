import Image from "next/image";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";
import RecentProjects from "./components/RecentProjects";
import Skills from "./components/Skills";
import './main.css';


export default function Home() {
  return (
    <div className="element">
    {/* <main className="flex min-h-screen flex-col p-24 bg-opacity-0"> */}
      <Main/>
      <About/>
      <RecentProjects/>
      <Skills/>
    {/* </main> */}
    
    </div>
  );
}
