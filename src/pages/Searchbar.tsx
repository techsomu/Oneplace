"use client"; // Required for interactivity

import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjust based on your import path
import { Button } from "@/components/ui/button";

type SearchBarProps = object

const SearchBar: React.FC<SearchBarProps> = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // onSearch(query); // Call the onSearch callback
  };

  return (
    <div className="flex items-center gap-2 bg color: blue">
      {/* SCHDNCN Input */}
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type Your Requirement..."
        className="flex-1  py-5 px-5 mx-5"
      />

      {/* SCHDNCN Button */}
      <Button onClick={handleSearch} variant="default">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
