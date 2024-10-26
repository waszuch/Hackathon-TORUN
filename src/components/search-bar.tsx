import { Input } from "./ui/input";
import { BiSearch } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

export function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleLocationClick = () => {
    setInputValue("Toruński Park Technologiczny, Włocławska 167, 87-100 Toruń");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[60%] flex items-center">
        <Input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <BiSearch
          size={60}
          className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
        />
        <BiCurrentLocation
          size={60}
          className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
    </div>
  );
}