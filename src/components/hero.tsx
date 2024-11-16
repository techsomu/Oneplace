import SearchBar from "@/pages/Searchbar";
import React from "react";
import { Badge } from "@/components/ui/badge"
export function Hero() {
  return (
    
    <section className="relative bg-cover bg-center py-60 px-8"
          style={{ backgroundImage: "url('/bridge6.jpg')" }}
          
      >  
      <Badge/>
<SearchBar></SearchBar>
          </section>

  );
};
