import { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "@/components/theme-provider";

export function CamSec() {
  const { theme } = useTheme();
  const buttonTextColor = theme === "light" ? "text-white" : "text-black";


  const [imageSrc, setImageSrc] = useState("https://api-wideo4-241222410541.us-central1.run.app/vid1");


  const handleButtonClick = (src: string) => {
    setImageSrc(src);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)] w-screen">
      <img 
        src={imageSrc}
        alt="Camera Feed"
        className="w-full sm:w-[50%] md:w-[50%] lg:w-[50%] h-auto max-h-[70%] object-cover rounded-lg border-2"
      />
      <div className="flex mt-2">
        <Button className={`mr-2 w-32 ${buttonTextColor}`} onClick={() => handleButtonClick("https://api-wideo4-241222410541.us-central1.run.app/vid1")}>
          Cam 1
        </Button>
        <Button className={`mr-2 w-32 ${buttonTextColor}`} onClick={() => handleButtonClick("https://api-wideo4-241222410541.us-central1.run.app/vid2")}>
          Cam 2
        </Button>
        <Button className={`w-32 ${buttonTextColor}`} onClick={() => handleButtonClick("https://api-wideo4-241222410541.us-central1.run.app/vid3")}>
          Cam 3
        </Button>
      </div>
    </div>
  );
}