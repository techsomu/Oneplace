
import { Hero } from "@/components/hero";
import { NavigationMenuDemo } from "@/pages/navmenu/navmenu";



const Home: React.FC = () => {

  return (
    <>
      <div className="headerdiv">
        <NavigationMenuDemo></NavigationMenuDemo>
      </div>
      <Hero /></>
  );
};

export default Home;
