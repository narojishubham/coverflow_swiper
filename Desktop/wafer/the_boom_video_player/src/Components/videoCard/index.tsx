// import 'bootstrap-icons/font/bootstrap-icons.css'

// swiper bundle styles
import 'swiper/css/bundle'
// swiper core styles
import 'swiper/css'
import { useEffect, useState } from 'react'

type videoData = {
  videoSrc: string
  orientation?: string
  integration?: string
}
const VideoCard = ({ videoSrc, orientation, integration }: videoData) => {
  const [hovered, setHovered] = useState(false)
  const [mouseEvent, setMouseEvent] = useState(false)

  const hidePlayToggle = () => {
    setHovered(true)
    console.log('hovered', hovered)
  }
  const showPlayButton = () => {
    setHovered(false)
    setMouseEvent(false)
  }
  const handlePlay = (e: any) => {
    e.target.play()
  }
  const handlePause = (e: any) => {
    e.target.pause()
  }
  const playPauseVideo = (e: any) => {
    if (mouseEvent === true) {
      e.target.pause()
    } else {
      e.target.play()
    }
  }
  const [muted, setMuted] = useState(true)
  const handleToggleMute = () => {
    setMuted(!muted)
    // setMuted(false);
  }
  const unmute = () => {
    setMuted(false)
  }
  useEffect(() => {
    // handleToggleMute();
  }, [muted])
  // const unmutedVideos = (muted1: boolean) => {
  //     if (muted1 === muted()) {
  //         setMuted(true);
  //     }
  // };
  // const [progress, setProgress] = createSignal(0);
  // const handleProgress = (e) => {
  //     if (isNaN(e.target.duration))
  //         // duration is NotaNumber at Beginning.
  //         console.log("error in video progress");
  //     return;
  //     setProgress((e.target.currentTime / e.target.duration) * 100);
  //     console.log("show in video progress");
  // };
  let videoRef
  const [progress, setProgress] = useState(0)
  const handleVideoProgress = (e: any) => {
    // console.log("e e e e e e ", e);
    if (isNaN(e.target.duration))
      // duration is Not a Number at Beginning.
      console.log('error in video progress')
    return setProgress((e.target.currentTime / e.target.duration) * 100)
  }

  return (
    <div
      className={`relative brightness-50 hover:brightness-100 ${
        integration === 'grid' ? '' : 'w-64'
      }`}
      onMouseEnter={hidePlayToggle}
      onMouseLeave={showPlayButton}
      onMouseOver={handlePlay}
      onMouseOut={handlePause}
    >
      <div
        className=""
        style={{ width: '16rem', height: '400px' }}
        onClick={playPauseVideo}
      >
        <video
          style={{ width: '16rem', height: '400px' }}
          muted={muted}
          className={`rounded-lg videoBox video-player ${
            orientation === 'portrait' ? 'portraitAspextRatio' : 'aspect-video'
          }`}
          src={videoSrc}
          ref={videoRef}
          onProgress={handleVideoProgress}
          onClick={() => {
            setMouseEvent(!mouseEvent)
            setHovered(true)
          }}
        ></video>
      </div>
      <div
        className={`absolute top-0 gap-2 grid grid-cols-[auto_1fr_auto_auto] w-full pt-3 pb-4 rounded-t-lg   playerCard`}
      >
        <div></div>
        <h3 className="text-lg font-medium leading-4 text-white fontFamily">
          test
        </h3>

        <div
          onClick={() => {
            handleToggleMute()
            console.log('gdfgdgdfg')
          }}
          className={`showPlay text-white pr-1.5 -m-2`}
        >
          {/* {muted ? <MuteButton /> : <UnmuteIcon />} */}
        </div>
      </div>
      <div className="absolute flex flex-row items-end justify-between w-full  bottom-4">
        <div className="flex items-center rounded-full bg-white ctaButtonShadow h-5 ml-2 p-4 border-0 shadow-[0_0_25px_rgb(000/ 10%),_0_10px_10px_rgb(000/4%)] text-sm">
          Cta Button
        </div>
        <div className="pr-2.5 pb-1 gap-4 flex flex-col">
          <div className="">{/* <ShareIcon /> */}</div>
          <div>{/* <FullScreen /> */}</div>
        </div>
      </div>
      {/* pause button */}
      <div
        className={`${
          hovered ? 'hidePlay' : 'showPlay'
        } absolute top-1/2 left-2/4 -translate-y-2/4 -translate-x-2/4`}
      >
        {/* <PlayButton /> */}
      </div>
      {/* playbutton */}
      <div
        className={`${
          mouseEvent && hovered ? 'showPlay' : 'hidePlay'
        } hidePlay absolute top-1/2 left-2/4 -translate-y-2/4 -translate-x-2/4`}
      >
        {/* <PauseButton /> */}
      </div>
      {/* replay */}
      <div className={`${hovered} hidden absolute bottom-1/2 left-2/4 `}>
        {/* <RelodButton /> */}
      </div>
      <div
        onChange={(e) => handleVideoProgress(e)}
        className="absolute progressBar "
      ></div>
      {/* <progress class="progress absolute  b-0" max="100" value={progress()}></progress> */}
    </div>
  )
}
export default VideoCard
