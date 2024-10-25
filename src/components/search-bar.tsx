import { Input } from "./ui/input";
import { BiSearch } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";

export function SearchBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[60%]  flex items-center">
      <Input/>
      <BiSearch
        size={60}
        className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
        />
        <BiCurrentLocation
        size={60}
        className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  )
}