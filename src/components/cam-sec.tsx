export function CamSec() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-150px)] w-screen">
        <img 
          src="https://wideo-api-241222410541.us-central1.run.app/video_feed"
          alt="Camera Feed"
          className="w-full sm:w-[70%] md:w-[60%] lg:w-[60%] h-auto max-h-[70%] object-cover rounded-lg border-2"
        />
      </div>
  )
}