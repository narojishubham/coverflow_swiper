import react from 'react'
import VideoCard from '../videoCard'

type SwiperHtmlFormatType = {
  // playlistData: PlaylistDataType | undefined;
  swiperObjects: {
    nextFn: () => void
    prevFn: () => void
    // classSufix: string;
  }
}
const SwiperHtmlFormat = ({
  swiperObjects: swiperFn,
}: SwiperHtmlFormatType) => {
  const { nextFn, prevFn } = swiperFn

  return (
    <div className={`swiper swiper-container`}>
      <div className="swiper-wrapper">
        {/* {playlistData ? (
                    <For each={playlistData.data.videos} fallback={<p>Loading...</p>}>
                        {(item, i) => ( */}
        <div
          className="swiper-slide currentSwipeConfig_className  w-min "
          style={{ width: '16rem', height: '400px' }}
        >
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/baa6b176-ae3a-466f-abd9-f69d126410f6/272785933_125547516645178_843889997119252823_n.mp4'
            }
          />
        </div>
        <div
          style={{ width: '16rem', height: '400px' }}
          className="swiper-slide currentSwipeConfig_className  w-min "
        >
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/f1bcdbb5-7245-4009-9157-edc1c7d3ed9d/247922113_912121313022709_2640457193839839743_n.mp4'
            }
          />
        </div>
        <div
          style={{ width: '16rem', height: '400px' }}
          className="swiper-slide currentSwipeConfig_className  w-min "
        >
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/df9cb8d7-5949-431e-ae5c-86e9219ead7b/271694775_613413359768028_8857175777800107282_n.mp4'
            }
          />
        </div>
        <div
          style={{ width: '16rem', height: '400px' }}
          className="swiper-slide currentSwipeConfig_className  w-min "
        >
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/c30f7053-56b4-415e-bb98-145d09e5b953/278478013_985795082328231_8566024087259652933_n.mp4'
            }
          />
        </div>
        <div
          style={{ width: '16rem', height: '400px' }}
          className="swiper-slide currentSwipeConfig_className  w-min "
        >
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/0079c364-bd37-405c-8dcd-cb070aefabb7/278084115_552127612846420_4772318583356786301_n.mp4'
            }
          />
        </div>
        <div
          style={{ width: '16rem', height: '400px' }}
          className="swiper-slide currentSwipeConfig_className  w-min "
        >
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/ea80d5ae-138a-4dab-a7ed-b7e7d523921d/275569272_385997629624694_6832443836524224442_n.mp4'
            }
          />
        </div>
        {/* )}
                    </For>
                ) : null}
            </div> */}
      </div>
      <div className="buttonBackground hover:opacity-100 scale-75">
        <div
          className="swiper-button-prev pl-2 text-height:'400px'white"
          onClick={prevFn}
        ></div>
      </div>
      <div className="buttonBackground1 hover:opacity-100 scale-75">
        <div
          className="swiper-button-next pr-2 text-white"
          onClick={nextFn}
        ></div>
      </div>
    </div>
  )
}
export default SwiperHtmlFormat
