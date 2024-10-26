import { Button } from "./ui/button";
import { useTheme } from "@/components/theme-provider";

export function CamSec() {
  const { theme } = useTheme();

  // Determine the text color based on the current theme
  const buttonTextColor = theme === "light" ? "text-white" : "text-black";

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)] w-screen">
      <img 
        src="https://wideo-api-241222410541.us-central1.run.app/video_feed"
        alt="Camera Feed"
        className="w-full sm:w-[50%] md:w-[50%] lg:w-[50%] h-auto max-h-[70%] object-cover rounded-lg border-2"
      />
      <div className="flex mt-2">
        <Button className={`mr-2 w-32 ${buttonTextColor}`}>Cam 1</Button>
        <Button className={`mr-2 w-32 ${buttonTextColor}`}>Cam 2</Button>
        <Button className={`w-32 ${buttonTextColor}`}>Cam 3</Button>
      </div>
    </div>
  );
}