import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constatnt'
import VideoCard from './videoCard';
import VideoHorizontalCard from './VideoHorizontalCard';
import Shimmer from './shimmer'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {

  const useurl = useSelector(store => store.url.url)
  const usePayload = useSelector(store => store.url.payload)
  const useonoff = useSelector(store => store.url.onoff)

  const [videos, setvideos] = useState([]);

  useEffect(() => {
    // console.log(useurl);
    if (useonoff) {
      fetchURLVideoData();
    } else {
      fetchVideoData();
    }
  }, [usePayload]);

  async function fetchVideoData() {
    const jsonData = await fetch(YOUTUBE_VIDEO_API);
    const data = await jsonData.json();
    setvideos(data?.items);
  }

  async function fetchURLVideoData() {
    const jsonData = await fetch(useurl + usePayload);
    const data = await jsonData.json();
    console.log(data);
    setvideos(data?.items);
  }



  return (videos === undefined) ? <Shimmer /> : (
    <div className='flex m-2 col-span-9  flex-wrap justify-around ' >

      {
        useonoff ?
          (videos.map((video, index) => {
            return <Link to={'/watch?v=' + video.id.videoId
            } key={index}><VideoHorizontalCard data={video} /></Link>
          })) :
          (videos.map((video, index) => {
            // console.log(video,index);
            return <Link to={'/watch?v=' + video.id
            } key={index}><VideoCard data={video} /></Link>
          }))
      }
    </div>
  )
}

export default VideoContainer