export function CamSec() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-150px)] w-screen">
        <img 
          src="https://wideo-api-241222410541.us-central1.run.app/video_feed"
          alt="Camera Feed"
          className="w-full sm:w-[50%] md:w-[50%] lg:w-[50%] h-auto max-h-[70%] object-cover rounded-lg border-2"
        />
      </div>
  )
}