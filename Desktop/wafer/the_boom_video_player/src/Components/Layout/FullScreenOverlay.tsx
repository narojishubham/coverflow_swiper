import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoCard from '../videoCard'
import { EffectCoverflow, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules

export default function App() {
  return (
    <>
      <Swiper
        loop={false}
        autoplay={false}
        speed={1000}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 400,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/0079c364-bd37-405c-8dcd-cb070aefabb7/278084115_552127612846420_4772318583356786301_n.mp4'
            }
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/c30f7053-56b4-415e-bb98-145d09e5b953/278478013_985795082328231_8566024087259652933_n.mp4'
            }
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/df9cb8d7-5949-431e-ae5c-86e9219ead7b/271694775_613413359768028_8857175777800107282_n.mp4'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/f1bcdbb5-7245-4009-9157-edc1c7d3ed9d/247922113_912121313022709_2640457193839839743_n.mp4'
            }
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard
            videoSrc={
              'https://d36zfc83ckw6gr.cloudfront.net/146/baa6b176-ae3a-466f-abd9-f69d126410f6/272785933_125547516645178_843889997119252823_n.mp4'
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
